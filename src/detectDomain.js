function checkDomain(domain, configList) {
  let domainString = domain.substring(domain.length - 1) === "." ? domain.slice(0, -1) : domain;
  const domainParts = domainToParts(domainString)
  const checkResults = check(domainParts, configList)
  return checkResults;
}

function check(domain, configList) {
  //check if domain is in the whitelist
  const whitelistMatch = matchPartsAgainstList(domain, formatLists(configList.whitelist))
  if (whitelistMatch){
    //found in whitelist = PASS
    return { block: false, resultType: 'allowlist' }
  }

  //check if domain is in the blacklist
  const blacklistMatch  = matchPartsAgainstList(domain, formatLists(configList.blacklist))
  if (blacklistMatch){
    //found in blacklist = BLOCK
    return { block: true, resultType: 'blocklist' }
  }

  //if not in any list then nothing matched = PASS
  return { block: false, resultType: 'nomatch' }
}

//splits domain into parts and reverse order
function domainToParts (domain) {
  try {
  return domain.split('.').reverse()
  } catch (e) {
    throw new Error(JSON.stringify(domain))
  }
}

//splits domain into parts and reverse order
function matchPartsAgainstList(domain, list) {
  return list.some((target) => {
    // target domain has more parts than source, fail
    if (target.length > domain.length){
      return false
    }

    return target.every((part, index) => domain[index] === part)

  })
}

//formats list to be ready to compare by calling domainToParts
function formatLists (list) {
  const listToMap = list || [];
  return listToMap.map(domainToParts);
}

module.exports = checkDomain
