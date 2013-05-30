var util = require("../lib/util");

describe("util", function() {
  describe(".bufToIp", function() {
    it("should convert a Buffer to an IPv4 address", function() {
      util.bufToIp(new Buffer([0x00, 0x00, 0x00, 0x00]))
        .should.equal("0.0.0.0");

      util.bufToIp(new Buffer([0xff, 0xff, 0xff, 0xff]))
        .should.equal("255.255.255.255");

      util.bufToIp(new Buffer([0xc0, 0xff, 0xee, 0xee]))
        .should.equal("192.255.238.238");
    });

    it("should convert a Buffer to an IPv4 address starting at the given offset", function() {
      util.bufToIp(new Buffer([0xff, 0xff, 0x00, 0x00, 0x00, 0x00, 0xff, 0xff]), 2)
        .should.equal("0.0.0.0");

      util.bufToIp(new Buffer([0x00, 0x00, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00]), 2)
        .should.equal("255.255.255.255");

      util.bufToIp(new Buffer([0x00, 0x00, 0xc0, 0xff, 0xee, 0xee, 0x00, 0x00]), 2)
        .should.equal("192.255.238.238");
    });
  });

  describe(".ipToBuf", function() {
    it("should convert an IPv4 address to a buffer", function() {
      util.ipToBuf("0.0.0.0")
        .toString("hex").toLowerCase()
        .should.equal("00000000");

      util.ipToBuf("255.255.255.255")
        .toString("hex").toLowerCase()
        .should.equal("ffffffff");

      util.ipToBuf("192.255.238.238")
        .toString("hex").toLowerCase()
        .should.equal("c0ffeeee");
    });
  });

  describe(".bufToMac", function() {
    it("should convert a Buffer to a MAC address", function() {
      util.bufToMac(new Buffer([0x00, 0x00, 0x00, 0x00, 0x00, 0x00]))
        .should.equal("00-00-00-00-00-00");

      util.bufToMac(new Buffer([0xff, 0xff, 0xff, 0xff, 0xff, 0xff]))
        .should.equal("FF-FF-FF-FF-FF-FF");

      util.bufToMac(new Buffer([0xc0, 0xff, 0xee,0xc0, 0xff, 0xee]))
        .should.equal("C0-FF-EE-C0-FF-EE");
    });

    it("should convert a Buffer to a MAC address starting at the given offset", function() {
      util.bufToMac(new Buffer([0xff, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0xff]), 2)
        .should.equal("00-00-00-00-00-00");

      util.bufToMac(new Buffer([0x00, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00]), 2)
        .should.equal("FF-FF-FF-FF-FF-FF");

      util.bufToMac(new Buffer([0x00, 0x00, 0xc0, 0xff, 0xee,0xc0, 0xff, 0xee, 0x00, 0x00]), 2)
        .should.equal("C0-FF-EE-C0-FF-EE");
    });
  });

  describe(".macToBuf", function() {
    it("should convert a MAC address to a buffer", function() {
      util.macToBuf("00-00-00-00-00-00")
        .toString("hex").toLowerCase()
        .should.equal("000000000000");

      util.macToBuf("FF-FF-FF-FF-FF-FF")
        .toString("hex").toLowerCase()
        .should.equal("ffffffffffff");

      util.macToBuf("C0-FF-EE-C0-FF-EE")
        .toString("hex").toLowerCase()
        .should.equal("c0ffeec0ffee");
    });
  });
});