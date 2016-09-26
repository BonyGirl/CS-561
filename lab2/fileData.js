
const fs = require('fs');


exports. getFileAsString = function(path) {
    fs.readFile(path,"utf-8",(error,data) => {
        if(error) throw error;
        var asObject = data;
        console.log(asObject);
        // console.log("hahaha");
    });
}

function getFileAsJSON(path) {
    fs.readFile(path,"utf-8",(error,data) => {
        if(error) throw error;

        var asObject = JSON.parse(data);
        console.log(asObject);
        // console.log("hahaha");
    });
}

// function saveStringToFile(path,text)

// function saveJSONToFile(path,obj)

