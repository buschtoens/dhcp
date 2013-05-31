module.exports = [
  function intU8(buf) {
    return buf.readUInt8(0, true);
  }
, function int8(buf) {
    return buf.readInt8(0, true);
  }
, function intU16BE(buf) {
    return buf.readUInt16BE(0, true);
  }
, function int16BE(buf) {
    return buf.readInt16BE(0, true);
  }
, function intU32BE(buf) {
    return buf.readUInt32BE(0, true);
  }
, function int32BE(buf) {
    return buf.readInt32BE(0, true);
  }
];
module.exports[0].length = 1;
module.exports[1].length = 1;
module.exports[2].length = 2;
module.exports[3].length = 2;
module.exports[4].length = 4;
module.exports[5].length = 4;