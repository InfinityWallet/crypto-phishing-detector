let BlackList = require('../Securitylist/Urls/blacklist.json');
let WhiteList = require('../Securitylist/Urls/whitelist.json');

//default local lists. Updated with every new package release, best using the github raw url for the latest data
var localLists = {
  whitelist: WhiteList,
  blacklist: BlackList
}

//handle custom or local list with failover to local
function getList(type, customListUrl){

  if(type === "custom" && customListUrl != "" && isJsonString(customListUrl) === true && customListUrl.hasOwnProperty('whitelist') && customListUrl.hasOwnProperty('blacklist') && Array.isArray(customListUrl.whitelist) && Array.isArray(customListUrl.blacklist)){
    return customListUrl;
  }

  return localLists;
}

//check json
function isJsonString(str) {
  str = typeof str !== "string" ? JSON.stringify(str) : str;

  try {
    str = JSON.parse(str);
  } catch (e) {
    return false;
  }

  if (typeof str === "object" && str !== null) {
    return true;
  }

  return false;
}

module.exports = getList;
