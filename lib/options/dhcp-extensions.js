module.exports = {
  50: {
    name: "Requested IP Address"
  , type: "ip"
  , method: "requestIP"
  }
, 51: {
    name: "IP Address Lease Time"
  , type: "intU32BE"
  , method: "ipLease"
  }
, 52: {
    name: "Option Overload"
  , enum: [1, 2, 3]
  , method: "optionOverload"
  }
, 66: {
    name: "TFTP server name"
  , type: "ascii"
  , method: "tftp"
  }
, 67: {
    name: "Bootfile name"
  , type: "ascii"
  , method: "bootfile"
  }
, 53: {
    name: "DHCP Message Type"
  , enum: [1, 2, 3, 4, 5, 6, 7, 8]
  , method: "dhcpMessageType"
  }
, 54: {
    name: "Server Identifier"
  , type: "ip"
  , method: "serverIdentifier"
  }
, 55: {
    name: "Parameter Request List"
  , type: "intU8"
  , list: true
  , method: "requestParameterList"
  }
, 56: {
    name: "Message"
  , type: "ascii"
  , method: "message"
  }
, 57: {
    name: "Maximum DHCP Message Size"
  , type: "intU16BE"
  , method: "messageMaxSize"
  }
, 58: {
    name: "Renewal (T1) Time Value"
  , type: "intU32BE"
  , method: "renewal"
  }
, 59: {
    name: "Rebinding (T2) Time Value"
  , type: "ascii"
  , method: "rebinding"
  }
, 60: {
    name: "Vendor class identifier"
  , type: "vendor"
  , method: "vendorClassId"
  }
, 61: {
    name: "Client-identifier"
  , type: "vendor"
  , method: "clientId"
  }
};