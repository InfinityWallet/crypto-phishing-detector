# Crypto Phishing Detector

This repository provides a list of URLs and contracts (contracts list needs further contribution) which can be checked against to see if a url or contract is malicious or official, there are two lists a blacklist and whitelist. This repository also contains a utility to check URLs against the whitelist and blacklist.

This repository is open to everyone to contribute and use. However, it was created by and is used within the Infinity Wallet for warning/protecting users when they interact with a malicious URL, currently we only use the URL blacklist in the Infinity Wallet. We use this library to check a URL that are user visits within the Infinity Wallet Web3 Browser, when the Infinity Wallet detects a URL a user vists is in the blacklist it takes the user to a warning page as shown in the example below.

![Infinity Wallet Blacklist UI Example](https://i.gyazo.com/bedb1c560fc7b3de4a1f26f85af460b9.png)

We also have tokens and DApps information and custom icon list repository which is used to add tokens and DApps to the Infinity Wallet, with DApps added in that list being displayed within the Infinity Wallet Web3 Store (https://github.com/InfinityWallet/Crypto-Assets).

## Data Lists
There are 2 types of lists the URLs and Smart Contract lists which can be used to help provide a higher degree of protecion for users against scams, malware and phisihing within the crypto space.

### URLS
The URL list can be used to protect users against crypto and non-crypto scams, phising sites and malware, as well as other dangers.

- Whitelist = A list of official URLs which may be targeted by malicious actors;
- Blacklist = A list of malicious and dangerous URLs that all platforms should block;

### Smart Contracts
The smart contract list can be used to protect users from interacting with malicious or scam contracts (Tokens, NFTs, protocols and etc..)

- Whitelist = A list of official smart contracts;

- Blacklist = A list of scam and malicious contracts that all platforms should block;

- URLContracts = This folder is used to list all the contracts a official web3 project may use. Once this list has became more established it could be used to protect users against compromised domains or interfaces of official projects, where if a contract is not listed for the platform interacting with then it will show the user a warning.

# Installation & Usage of the Utility
You can install the package (https://www.npmjs.com/package/@infinitywallet/crypto-phishing-detector) in your project by:

### Using yarn
```yarn add @infinitywallet/crypto-phishing-detector```

### Using npm
```npm install @infinitywallet/crypto-phishing-detector```

## Usage of the package
To use the package to check a URL against the whitelist and blacklist you can:

### Basic Usage:
This example shows how to use the local whitelist and blacklist. However, if you want to use the most up-to-date version of the lists its recommended to use the advanced example.
```js
const checkURL = require('@infinitywallet/crypto-phishing-detector');

const urlToCheck = checkURL('infinitywallets.io')
console.log(urlToCheck)
```

### Advanced Usage:
This example allows you to pass an object with the whitelist and blacklist. You can pull the lists (directly from github, your own list, hosted api or anywhere else) and then pass the object in the correct format to the urlToCheck function as in the example below.

If you want to use the latest github lists then use the following url:
- Whitelist: https://cdn.jsdelivr.net/gh/InfinityWallet/crypto-phishing-detector@main/Securitylist/Urls/whitelist.json
- Blacklist: https://cdn.jsdelivr.net/gh/InfinityWallet/crypto-phishing-detector@main/Securitylist/Urls/blacklist.json

The urlToCheck function for advanced usuage should be used in the following way ```checkDomain(URL_TO_CHECK, "custom", LIST_TO_CHECK)``` as shown in the example below:
```js
const checkURL = require('@infinitywallet/crypto-phishing-detector');

var dataLists = {
  "whitelist": ["infinitywallet.io"],
  "blacklist": ["infinityswallet.io"]
}

const urlToCheck = checkDomain("infinityswallet.io", "custom", dataLists);
console.log(urlToCheck)
```

## Response format

**```block```** -
- true = When returns **TRUE** this means the url is malicious;
- false = When returns **FALSE** this means the url is safe or not found in any of the lists;

**```resultType```** -
- nomatch = This means that the url could not be found in either the whitelist or blacklist;
- allowlist = This means that the url was found in the whitelist;
- blocklist = This means that the url was found in the blacklist **( In this case you should forward a user to an interface with a warning)**;

```js
{
  block: false,
  resultType: 'nomatch'
}
```

# Reporting
To report a URL or Smart Contract you can open an issue. When reporting make sure to provide for each URL or Smart Contract a reason and what list it should be added to.

Report here: https://github.com/InfinityWallet/crypto-phishing-detector/issues/new/choose

# Contributing

## How to Contribute
If you would like contribute and update the list of URLs or Smart Contracts, then you will need to open a PR to the main branch of this repository.

### Contribute Rules
- Add the URL(s) or Contract(s) to the bottom of the list and in the same format as the existing URLs;
- The URL should not contain ```https://```, ```http://``` or ```www.```;
- URLs need to be formatted to target the correct domain or subdomain that is either to be blacklisted or whitelisted. A further explanation can be found in URL formatting.

### URL formatting
When whitelisting or blacklisting you need to format the url based on the point in which the URL is directed to the website you want to whitelist or blacklist. This is because the detector will take what you place + all subdomains after it, as an example:

 - Domain, example (```host.com```) - This will trigger a detection on the domain "host.com" and any subdomain after such as "sub.host.com", "sub.sub.host.com" and etc;

 - Subdomain, example (```domain.host.com```) - This will trigger a detection on the subdomain "domain.host.com" and any following subdomain such as "sub.domain.host.com", but it won't trigger a detection on the domain "host.com". This format should be used when the domain is not the targeted domain;

 - Multi-subdomain, example (```sub.domain.host.com```) - This will trigger a detection on the subdomain "sub.domain.host.com" and any following subdomain such as "sub.sub.domain.host.com", but it won't trigger a detection on the higher sub-domain "domain.host.com" or the domain "host.com". This format should be used when the  domain and higher subdomain is not the target;

### Reason for adding

**Each URL or Smart Contract added should have a description as to the reason why its blacklisted** (it is optional to add a reason for whitelisting), to add a description go to the reason folder.

When adding a descirption to the blacklist you need to provide a reason and severity level, while when optionally adding a descirption to the whitelist you will only need to provide a reason. When adding a new reason for a URL add a new line at the bottom of the list in the same format.

**```reason```** - A description as to why a URL or Contract is whitelisted or blacklisted

**```severity```** (Only needed for the blacklist) - A severity level to desribe the level of a threat the URL or Contract poses, with level 1 been the lowest and level 3 the highest.
- Level 1 = Fake using trademark or name of another;
- Level 2 = Phising or scam;
- Level 3 = Malware or any other malicious activity;

## Blocking Policy
We are always looking to block any malicious actors within the space and we will be quick and decisive to block reported URLs and Smart Contracts. Here are a few reasons why a URL or Smart Contract may be added to the blacklist:

### URL-
- Impersonating known or well established websites;
- Websites/DApps that are scamming or phising;
- Websites/DApps that try to trick users into providing their private keys or seed phrases;
- Websites/DApps that have any malware or malicious activity;

###  Smart Contracts-
- Any contracts which are malicious (scamming/stealing from users)
- Fake Tokens and NFTs;

We will ultimately do our best to keep our users safe and the list up-to-date with the support of contributors.
