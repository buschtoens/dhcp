module.exports = [
  {
    name: "ip"
  , length: 4
  , read: function(buf) {
      var ip = [];
      for(var i = 0; i < 4; i++)
        ip.push(buf[i].toString(10))
      return ip.join(".");
    }
  , write: function(ip) {
      return new Buffer(ip.split(".").map(function(dec) { return parseInt(dec, 10) }));
    }
  }
, {
    name: "mac"
  , length: 6
  , read: function(buf) {
      var mac = []
        , hex;
      for(var i = 0; i < 6; i++) {
        hex = buf[i].toString(16).toUpperCase();
        mac.push(hex.length == 2 ? hex : "0" + hex);
      }
      return mac.join("-");
    }
  , write: function(mac) {
      return new Buffer(mac.split("-").map(function(hex) { return parseInt(hex, 16) }));
    }
  }
];