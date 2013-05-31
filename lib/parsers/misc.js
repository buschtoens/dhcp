module.exports = [
  function boolean(buf) {
    return !!buf[0];
  }
, function ascii(buf) {
    return buf.toString("ascii", 0, buf.length);
  }
, function hex(buf) {
    return buf.toString("hex", 0, buf.length);
  }
, function vendor(buf) {
    return buf;
  }
];
module.exports[0].length = 1;
module.exports[1].length = null;
module.exports[2].length = null;
module.exports[3].length = null;