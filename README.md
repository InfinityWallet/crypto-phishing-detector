# Crypto Phishing Detector

This repository provides a list of URLs and contracts that can be checked against, to see if a URL or contract is well known or potentially malicious. For this there are two lists, a blacklist and a whitelist. This repository also contains a utility to check URLs against the whitelist and blacklist.

This repository is open to public contribution and use. However, it was initially created for use within the Infinity Wallet, to protect users by warning them when they interact with a malicious URL. We use this library to check a URL when visited within the Infinity Wallet Web3 Browser. When the Infinity Wallet detects a URL to visit is in the blacklist, it takes the user to a warning page as shown in the example below.

![Infinity Wallet Blacklist UI Example](https://i.gyazo.com/bedb1c560fc7b3de4a1f26f85af460b9.png)

We also have token and DApp information and custom icon list repositories, which are used to add tokens or DApps in the Infinity Wallet. With DApps added in the DApp list being displayed within the Infinity Wallet Web3 listings (https://github.com/InfinityWallet/Crypto-Assets).

## Data Lists
There are 2 types of lists, the URL list and the Smart Contract list. These can be used to help provide a higher degree of protection for users against scams, malware and phishing attempts.

### URLS
The URL list can be used to protect users against crypto and non-crypto scam, phishing and malware sites, as well as other dangers.

- Whitelist = A list of official URLs which may be targeted by malicious actors;
- Blacklist = A list of malicious and dangerous URLs that all platforms should block;

### Smart Contracts
The smart contract list can be used to protect users from interacting with malicious or scam contracts (Tokens, NFTs, protocols and etc..)

- Whitelist = A list of well established smart contracts;

- Blacklist = A list of reported malicious contracts;

- URLContracts = This folder is used to list the contracts of a known web3 project. Once this list becomes more established it could be used to protect users against some cases of compromised domains or interfaces.

# Installation & Usage of the Utility
You can install the package (https://www.npmjs.com/package/@infinitywallet/crypto-phishing-detector) in your project by:

### Using yarn
```yarn add @infinitywallet/crypto-phishing-detector```

### Using npm
```npm install @infinitywallet/crypto-phishing-detector```

## Usage of the package
To use the package to check a URL against the whitelist and blacklist you can:

### Basic Usage:
This example shows how to use the local whitelist and blacklist. However, if you want to use the most up-to-date version of the lists, it's recommended to use the advanced example.
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

The urlToCheck function for advanced usage should be used in the following way ```checkDomain(URL_TO_CHECK, "custom", LIST_TO_CHECK)``` as shown in the example below:
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
- true = When returns **TRUE** this means the URL could be malicious, as it is in the blacklist;
- false = When returns **FALSE** this means the URL could be safe, as it is not in the blacklist;

**```resultType```** -
- nomatch = This means that the URL could not be found in either the whitelist or blacklist;
- allowlist = This means that the url was found in the whitelist;
- blocklist = This means that the url was found in the blacklist **(in this case you should forward a user to an interface with a warning)**;

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
If you would like to contribute and update the list of URLs or Smart Contracts, then you will need to open a pull request to the main branch of this repository.

### Contribute Rules
- Add the URL(s) or Contract(s) to the bottom of the list and in the same format as the existing URLs;
- The URL should not contain ```https://```, ```http://``` or ```www.```;
- URLs need to be formatted to target the correct domain or subdomain that is either to be blacklisted or whitelisted. A further explanation can be found in URL formatting.

### URL formatting
When contributing to the whitelist or blacklist you need to make sure to format the URL based on the root domain/subdomain for the website you want to whitelist or blacklist. This is because the detector will consider what you place + all subdomains after it, as an example:

 - Domain, example (```host.com```) - This will trigger a detection on the domain "host.com" and any subdomain after such as "sub.host.com", "sub.sub.host.com" and etc;

 - Subdomain, example (```domain.host.com```) - This will trigger a detection on the subdomain "domain.host.com" and any following subdomain such as "sub.domain.host.com", but it won't trigger a detection on the domain "host.com". This format should be used when the domain is not the targeted domain;

 - Multi-subdomain, example (```sub.domain.host.com```) - This will trigger a detection on the subdomain "sub.domain.host.com" and any following subdomain such as "sub.sub.domain.host.com", but it won't trigger a detection on the higher sub-domain "domain.host.com" or the domain "host.com". This format should be used when the  domain and higher subdomain is not the target;

### Reason for adding

**Each URL or Smart Contract added should have a description as to the reason why it has been added to the blacklist** (it is optional to add a reason for whitelisting). To add a description go to the reason folder.

When adding a description to the blacklist you need to provide a reason and severity level, while when optionally adding a description to the whitelist you will only need to provide a reason. When adding a new reason for a URL add a new line at the bottom of the list in the same format.

**```reason```** - A description as to why a URL or Contract is whitelisted or blacklisted

**```severity```** (Only needed for the blacklist) - A severity level to describe the level of threat the URL or Contract poses. With level 1 being the lowest and level 3 the highest.
- Level 1 = Fake using trademark or name of another;
- Level 2 = Phishing or scam;
- Level 3 = Malware or any other malicious activity;

## Blocking Policy
We are always looking to protect users from malicious actors within the space, and we will add to the lists as more threats become known. Please be aware however that this is not an exhaustive list, and a URL or Smart Contract's presence or lack thereof does not guarantee that it is or is not safe to use. Here are a few reasons why a URL or Smart Contract may be added to the blacklist:

### URL-
- Impersonating known or well established websites;
- Websites/DApps reported to be scamming or phishing;
- Websites/DApps that try to trick users into providing their private keys or seed phrase;
- Websites/DApps that have any malware or malicious activity;

###  Smart Contracts-
- Any contracts reported to be malicious (such as scamming/stealing from users);
- Fake Tokens and NFTs;

We will ultimately do our best to keep our users safe and the list up-to-date with the support of contributors.
