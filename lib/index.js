var dgram = require("dgram")
  , EventEmitter = require("events").EventEmitter
  , inherits = require("util").inherits
  , util = require("./util");

module.exports = DHCP;

inherits(DHCP, EventEmitter);
function DHCP(address, onListening) {
  if(!(this instanceof DHCP)) return new DHCP(address);
  EventEmitter.call(this);

  this.address = address || "0.0.0.0";
  if(onListening) this.on("listening", onListening);

  for(var fn in this.on)
    this.on[fn] = this.on[fn].bind(this);
  for(var fn in this.handle)
    this.handle[fn] = this.handle[fn].bind(this);

  this.socket = dgram.createSocket("udp4");
  this.socket.bind(67, this.address, this.emitLater("listening"));
  this.socket.on("message", this.on.message);
}

DHCP.prototype.fixtures = {
  options: {
    0x32: {
      name: "Requested IP Address"
    , type: "ip"
    }
  , 0x33: {
      name: "IP Address Lease Time"
    , type: "UInt32BE"
    }
  , 0x34: {
      name: "Option Overload"
    , type: "UInt8"
    , values: {
        0x01: "file"
      , 0x02: "sname"
      , 0x03: "both"
      }
    }
  , 0x35: {
      name: "DHCP Message Type"
    , type: "UInt8"
    , values: {
        0x01: "DHCPDISCOVER"
      , 0x02: "DHCPOFFER"
      , 0x03: "DHCPREQUEST"
      , 0x04: "DHCPDECLINE"
      , 0x05: "DHCPACK"
      , 0x06: "DHCPNAK"
      , 0x07: "DHCPRELEASE"
      , 0x08: "DHCPINFORM"
      }
    }
  , 0x36: {
      name: "Server Identifier"
    , type: "ip"
    }
  , 0x37: {
      name: "Parameter Request List"
    , type: "UInt8"
    }
  , 0x38: {
      name: "Message"
    , type: "ascii"
    }
  , 0x39: {
      name: "Maximum DHCP Message Size"
    , type: "UInt16BE"
    }
  , 0x3a: {
      name: "Renewal (T1) Time Value"
    , type: "UInt32BE"
    }
  , 0x3b: {
      name: "Rebinding (T2) Time Value"
    , type: "UInt32BE"
    }
  , 0x3c: {
      name: "Vendor class identifier"
    , type: "ascii"
    }
  , 0x3d: {
      name: "Client-identifier"
    , type: "ascii"
    }
  }
};

DHCP.prototype.emitLater = function(event) {
  return this.emit.bind(this, event);
};
DHCP.prototype.on = {
  messageOptionsBlock: function(msg) {
    var pos = 240
      , ended = false
      , type
      , length;
    msg.options = {};

    while(!ended && pos < msg.length) {
      type = msg[pos++];

      switch(type) {
        case 0x00: pos++; break;
        case 0xFF: ended = true; break;
        default:
          length = msg.readUInt8(pos++);
          msg.options[type] = this.on.messageOption(type, msg.slice(pos, pos + length));
          pos += length;
      }
    }
  }
, messageOption: function(type, option) {
    if(type in this.fixtures.options) {
      switch(this.fixtures.options[type].type) {
        case "UInt8": return option.readUInt8(0, true); break;
        case "UInt16BE": return option.readUInt16BE(0, true); break;
        case "UInt32BE": return option.readUInt32BE(0, true); break;
        case "ascii": return option.toString("ascii"); break;
        case "utf8": return option.toString("utf8"); break;
        case "hex": return option.toString("hex"); break;
        case "ip": return util.bufToIp(option); break;
      }
    } else {
      return option.toString("hex");
    }
  }
, message: function(msg, rinfo) {
    msg.rinfo = rinfo;
    msg.op = msg.readUInt8(0, true);
    msg.htype = msg.readUInt8(1, true);
    msg.hlen = msg.readUInt8(2, true);
    msg.hops = msg.readUInt8(3, true);
    msg.xid = msg.readUInt32BE(4, true);
    msg.secs = msg.readUInt16BE(8, true);
    msg.flags = msg.readUInt16BE(10, true);
    msg.ciaddr = util.bufToIp(msg, 12);
    msg.yiaddr = util.bufToIp(msg, 16);
    msg.siaddr = util.bufToIp(msg, 20);
    msg.giaddr = util.bufToIp(msg, 24);
    msg.chaddr = util.bufToMac(msg, 28);
    msg.sname = msg.toString("utf8", 44, 108);
    msg.file = msg.toString("utf8", 108, 236);
    msg.magicCookie = msg.toString("hex", 236, 240);
    this.on.messageOptionsBlock(msg);
    msg.maxMessageSize = msg.options[0x39] || null;

    "op htype hlen hops xid secs flags ciaddr yiaddr siaddr giaddr chaddr sname file magicCookie options"
      .split(" ").forEach(function(key) {
        console.log(key, msg[key])
      });

    this.handle.message(msg);
  }
};

DHCP.prototype.handle = {
  error: function() {
    this.emit("error", arguments);
  }
, message: function(msg) {
    this.emit("message", msg);

    var type = this.fixtures.options[0x35].values[msg.options[0x35]];
    if(!type) return this.handle.error(new Error("Unknown DHCP Message Type"), msg);

    if(this.handle[type]) this.handle[type](msg);
    this.emit(type, msg);
  }
};