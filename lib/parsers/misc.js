module.exports = [
  {
    name: "boolean"
  , length: 1
  , read: function(buf) {
      return !!buf[0];
    }
  , write: function(bool) {
      return new Buffer([bool ? 0x1 : 0x0]);
    }
  }
, {
    name: "ascii"
  , length: null
  , read: function(buf) {
      return buf.toString("ascii", 0, buf.length);
    }
  , write: function(ascii) {
      return new Buffer(ascii, "ascii");
    }
  }
, {
    name: "hex"
  , length: null
  , read: function(buf) {
      return buf.toString("hex", 0, buf.length);
    }
  , write: function(hex) {
      return new Buffer(hex, "hex");
    }
  }
, {
    name: "vendor"
  , length: null
  , read: function(buf) {
      return buf;
    }
  , write: function(vendor) {
      return Buffer.isBuffer(vendor) ? vendor : new Buffer(vendor, "ascii");
    }
  }
];