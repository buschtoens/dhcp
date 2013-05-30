module.exports = {
  40: {
    name: "Network Information Service Domain"
  , type: "ascii"
  , method: "nisDomain"
  }
, 41: {
    name: "Network Information Servers"
  , type: "ip"
  , list: true
  , method: "nis"
  }
, 42: {
    name: "Network Time Protocol Servers"
  , type: "ip"
  , list: true
  , method: "ntp"
  }
, 43: {
    name: "Vendor Specific Information"
  , type: "vendor"
  , list: true
  , method: "vendor"
  }
, 44: {
    name: "NetBIOS over TCP/IP Name Server"
  , type: "ip"
  , list: true
  , method: "nbns"
  }
, 45: {
    name: "NetBIOS over TCP/IP Datagram Distribution Server"
  , type: "ip"
  , list: true
  , method: "nbdd"
  }
, 46: {
    name: "NetBIOS over TCP/IP Node Type"
  , enum: [0x1, 0x2, 0x4, 0x8]
  , length: 1
  , method: "nbNodeType"
  }
, 47: {
    name: "NetBIOS over TCP/IP Scope"
  , type: "ascii"
  , method: "nbScope"
  }
, 48: {
    name: "X Window System Font Server"
  , type: "ip"
  , list: true
  , method: "xFontServers"
  }
, 49: {
    name: "X Window System Display Manager"
  , type: "ip"
  , list: true
  , method: "xDisplayManagers"
  }
, 64: {
    name: "Network Information Service+ Domain"
  , type: "ascii"
  , method: "nisPlusDomain"
  }
, 65: {
    name: "Network Information Service+ Servers"
  , type: "ip"
  , list: true
  , method: "nisPlusServers"
  }
, 68: {
    name: "Mobile IP Home Agent"
  , type: "ip"
  , list: true
  , method: "homeAgentAdresses"
  }
, 69: {
    name: "Simple Mail Transport Protocol (SMTP) Server"
  , type: "ip"
  , list: true
  , method: "smtpServers"
  }
, 70: {
    name: "Post Office Protocol (POP3) Server"
  , type: "ip"
  , list: true
  , method: "pop3Servers"
  }
, 71: {
    name: "Network News Transport Protocol (NNTP) Server"
  , type: "ip"
  , list: true
  , method: "nntpServers"
  }
, 72: {
    name: "Default World Wide Web (WWW) Server"
  , type: "ip"
  , list: true
  , method: "wwwServers"
  }
, 73: {
    name: "Default Finger Server"
  , type: "ip"
  , list: true
  , method: "fingerServers"
  }
, 74: {
    name: "Default Internet Relay Chat (IRC) Server"
  , type: "ip"
  , list: true
  , method: "ircServers"
  }
, 75: {
    name: "StreetTalk Server"
  , type: "ip"
  , list: true
  , method: "streetTalkServers"
  }
, 76: {
    name: "StreetTalk Directory Assistance (STDA) Server"
  , type: "ip"
  , list: true
  , method: "streetTalkDAServers"
  }
};