module.exports = {
  26: {
    name: "Interface MTU"
  , type: "intU16BE"
  , method: "mtuInterface"
  }
, 27: {
    name: "All Subnets are Local"
  , type: "boolean"
  , method: "subnetsAreLocal"
  }
, 28: {
    name: "Broadcast Address"
  , type: "ip"
  , method: "broadcastAddress"
  }
, 29: {
    name: "Perform Mask Discovery"
  , type: "boolean"
  , method: "maskDiscovery"
  }
, 30: {
    name: "Mask Supplier"
  , type: "boolean"
  , method: "maskSupplier"
  }
, 31: {
    name: "Perform Router Discovery"
  , type: "boolean"
  , method: "routerDiscovery"
  }
, 32: {
    name: "Router Solicitation Address"
  , type: "boolean"
  , method: "routerSolicitation"
  }
, 33: {
    name: "Static Route"
  , type: "ip"
  , list: true
  , method: "staticRoutes"
  }
};