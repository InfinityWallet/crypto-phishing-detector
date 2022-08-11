//Run to format all files

var fs = require('fs');
let urlBlacklist = require('../Securitylist/Urls/blacklist.json');
let urlWhitelist = require('../Securitylist/Urls/whitelist.json');

let filesArray = [
  {
    fileList: urlBlacklist,
    writeLocation: "./Securitylist/Urls/blacklist.json"
  },
  {
    fileList: urlWhitelist,
    writeLocation: "./Securitylist/Urls/whitelist.json"
  }
]

function format(files){
  files.map(async (file) => {
    var dataAlphabetical = await alphabetical(file.fileList);
    var dataWWW = await removeWWW(dataAlphabetical);
    var dataDuplicates = await removeDuplicates(dataWWW);
    saveFile(dataDuplicates, file.writeLocation)
  });
}

//order alphabetically
function alphabetical(file){
  file.sort(function (a, b) {
    return a.localeCompare(b);
  });

  return file;
}

//remove https, http and www
function removeWWW(data){
  let array = [];
  data.map((urlData) => {
    array.push(urlData.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0])
  });
  return array;
}

//removes duplicates
function removeDuplicates(data){
  return [...new Set(data)];
}

//save formatted file
function saveFile(data, file){
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

//init
format(filesArray);
