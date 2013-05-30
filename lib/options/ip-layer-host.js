module.exports = {
  19: {
    name: "IP Forwarding"
  , type: "boolean"
  , method: "ipForwarding"
  }
, 20: {
    name: "Non-Local Source Routing"
  , type: "boolean"
  , method: "nonLocalSourceRouting"
  }
, 21: {
    name: "Policy Filter"
  , type: "ip"
  , list: true
  , method: "policyFilter"
  }
, 22: {
    name: "Maximum Datagram Reassembly Size"
  , type: "intU16BE"
  , method: "maxDatagramSize"
  }
, 23: {
    name: "Default IP Time-to-live"
  , type: "intU8BE"
  , method: "datagramTTL"
  }
, 24: {
    name: "Path MTU Aging Timeout"
  , type: "intU32BE"
  , method: "mtuTimeout"
  }
, 25: {
    name: "Path MTU Plateau Table"
  , type: "intU16BE"
  , list: true
  , method: "mtuSizes"
  }
};