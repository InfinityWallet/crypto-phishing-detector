//This example uses the internal list, to stay up-to-date you will need to update on every package release. However, each release will also not be the latest version. It is recommended to call directly from the github url

const checkURL = require('@infinitywallet/crypto-phishing-detector');

const urlToCheck = checkURL('infinitywallets.io')
console.log(urlToCheck)
