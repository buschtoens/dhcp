module.exports = [
  {
    name: "intU8"
  , length: 1
  , read: function(buf) {
      return buf[0];
    }
  , write: function(int) {
      return new Buffer([int]);
    }
  }
, {
    name: "int8"
  , length: 1
  , read: function(buf) {
      return buf.readInt8(0, true);
    }
  , write: function(int) {
      var buf = new Buffer(1);
      buf.writeInt8(int, 0);
      return buf;
    }
  }
, {
    name: "intU16BE"
  , length: 2
  , read: function(buf) {
      return buf.readUInt16BE(0, true);
    }
  , write: function(int) {
      var buf = new Buffer(2);
      buf.writeUInt16BE(int, 0);
      return buf;
    }
  }
, {
    name: "intU16BE"
  , length: 2
  , read: function(buf) {
      return buf.readUInt16BE(0, true);
    }
  , write: function(int) {
      var buf = new Buffer(2);
      buf.writeUInt16BE(int, 0);
      return buf;
    }
  }
, {
    name: "int16BE"
  , length: 2
  , read: function(buf) {
      return buf.readInt16BE(0, true);
    }
  , write: function(int) {
      var buf = new Buffer(2);
      buf.writeInt16BE(int, 0);
      return buf;
    }
  }
, {
    name: "intU32BE"
  , length: 4
  , read: function(buf) {
      return buf.readUInt32BE(0, true);
    }
  , write: function(int) {
      var buf = new Buffer(4);
      buf.writeUInt32BE(int, 0);
      return buf;
    }
  }
, {
    name: "int32BE"
  , length: 4
  , read: function(buf) {
      return buf.readInt32BE(0, true);
    }
  , write: function(int) {
      var buf = new Buffer(4);
      buf.writeInt32BE(int, 0);
      return buf;
    }
  }
];