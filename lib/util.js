module.exports = {
    bufToIp: function(buf, offset) {
      var ip = []
        , offset = offset || 0;
      for(var i = 0; i < 4; i++)
        ip.push(buf[i + offset].toString(10))
      
      return ip.join(".");
    }
  , ipToBuf: function(ip) {
      if(typeof ip == "string")
        return new Buffer(ip.split(".").map(function(dec) { return parseInt(dec, 10) }));
      else
        return null;
    }

  , bufToMac: function(buf, offset) {
      var mac = []
        , offset = offset || 0
        , hex;
      for(var i = 0; i < 6; i++) {
        hex = buf[i + offset].toString(16).toUpperCase();
        mac.push(hex.length == 2 ? hex : "0" + hex);
      }
      

      return mac.join("-");
    }
  , macToBuf: function(mac) {
      if(typeof mac == "string")
        return new Buffer(mac.split("-").map(function(hex) { return parseInt(hex, 16) }));
      else
        return null;
    }
  };