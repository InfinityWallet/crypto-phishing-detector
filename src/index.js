const Detector = require('./detectDomain')
const ListType = require('./configList')

function checkDomain(domain, type = "local", customList = "") {
  return Detector(domain, ListType(type, customList))
}

module.exports = checkDomain;
