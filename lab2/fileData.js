
const fs = require('fs');


exports.getFileAsString = function(path) {
    fs.readFile(path,"utf-8",(error,data) => {
        if(error) throw error;
        var asObject = data;
        console.log(asObject);
        // console.log("hahaha");
    });
}

exports. getFileAsJSON = function(path) {
    fs.readFile(path,"utf-8",(error,data) => {
        if(error) throw error;
        var asObject = JSON.parse(data);
        console.log(asObject);
        // console.log("hahaha");
    });
}

exports.saveStringToFile = function(path,text) {
    fs.writeFile(path, text,  function(err) {
   if (err) {
       return console.error(err);
   }
});
}

exports.saveJSONToFile = function(path,obj) {
    fs.writeFile(path,JSON.stringify(obj,null,4),  function(err) {
   if (err) {
       return console.error(err);
    }
    });

}

