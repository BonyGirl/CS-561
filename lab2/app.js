var fileData = require('./fileData')


// fileData.getFileAsString('chapter1.txt');

// fileData.getFileAsJSON('package.json');

// fileData.saveStringToFile('saveString.text','asdfsadfjsldfjalsdfjlskd!');

// var saveStringToFile = fileData.saveStringToFile('saveString.text','asdfsadfjsldfjalsdfjlskd!');


let data = '{data:1,data:2,data:3}';
fileData.saveJSONToFile(data);