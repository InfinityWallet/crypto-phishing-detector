const checkURL = require('@infinitywallet/crypto-phishing-detector');

//pass an object with a list of the whitelisted domains and blacklisted domains. You can pull this from an API/url or pull from a local file and then pass into the checkDomain function.
var dataLists = {
  "whitelist": ["infinitywallet.io"],
  "blacklist": ["infinityswallet.io"]
}

const urlToCheck = checkDomain("infinityswallet.io", "custom", dataLists);
console.log(urlToCheck)
