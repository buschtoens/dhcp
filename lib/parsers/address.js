module.exports = [
  function ip(buf) {
    var ip = [];
    for(var i = 0; i < 4; i++)
      ip.push(buf[i].toString(10))
    return ip.join(".");
  }
, function mac(buf) {
    var mac = []
      , hex;
    for(var i = 0; i < 6; i++) {
      hex = buf[i].toString(16).toUpperCase();
      mac.push(hex.length == 2 ? hex : "0" + hex);
    }
    return mac.join("-");
  }
];
module.exports[0].length = 4;
module.exports[1].length = 6;