module.exports = {
  0x00: {
    name: "Pad"
  , length: 0
  , default: new Buffer([0x00])
  , method: function pad(length) {
      return new Buffer(new Array(length || 1));
    }
  }
, 0xff: {
    name: "End"
  , length: 0
  , default: new Buffer([0xff])
  , method: "end"
  }
, 0x01: {
    name: "Subnet Mask"
  , type: "ip"
  , method: "subnet"
  , default: new Buffer([0xff, 0xff, 0xff, 0x00])
  }
, 0x02: {
    name: "Time Offset"
  , type: "int32BE"
  , method: "offset"
  , default: new Buffer([0x00, 0x00, 0x00, 0x00])
  }
, 0x03: {
    name: "Routers"
  , type: "ip"
  , list: true
  , method: "routers"
  }
, 0x04: {
    name: "Time Servers"
  , type: "ip"
  , list: true
  , method: "timeServers"
  }
, 0x05: {
    name: "Name Servers"
  , type: "ip"
  , list: true
  , method: "nameServers"
  }
, 0x06: {
    name: "Domain Name Servers"
  , type: "ip"
  , list: true
  , method: "domainNameServers"
  }
, 0x07: {
    name: "Log Servers"
  , type: "ip"
  , list: true
  , method: "logServers"
  }
, 0x08: {
    name: "Cookie Servers"
  , type: "ip"
  , list: true
  , method: "cookieServers"
  }
, 0x09: {
    name: "LPR Servers"
  , type: "ip"
  , list: true
  , method: "lprServers"
  }
, 10: {
    name: "Impress Servers"
  , type: "ip"
  , list: true
  , method: "impressServers"
  }
, 11: {
    name: "Resource Location Servers"
  , type: "ip"
  , list: true
  , method: "rscServers"
  }
, 12: {
    name: "Host Name"
  , type: "ascii"
  , method: "hostName"
  }
, 13: {
    name: "Boot File Size"
  , type: "intU16BE"
  , method: "bootFileSize"
  }
, 14: {
    name: "Merit Dump File"
  , type: "ascii"
  , method: "dumpFile"
  }
, 15: {
    name: "Domain Name"
  , type: "ascii"
  , method: "domainName"
  }
, 16: {
    name: "Swap Server"
  , type: "ascii"
  , method: "swapServer"
  }
, 17: {
    name: "Root Path"
  , type: "ascii"
  , method: "rootPath"
  }
, 18: {
    name: "Extensions Path"
  , type: "ascii"
  , method: "extensionsPath"
  }
};