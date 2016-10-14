"use strict"

const mongoCollections = require("../config/mongoCollections");
const hobby = mongoCollections.hobby;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllHob() {        
        return hobby().then((hobCollection) => {
            return hobCollection.find({}).toArray();
        });
    },

    getHobByName(nameHob) {
        if(!nameHob || typeof nameHob != 'string') 
            return Promise.reject("Inappropriate nameHob input in seed.js!");

        return hobby().then((hobCollection) => {
            return hobCollection.findOne({nameHob: nameHob }).then((nameHob) => {
                if (!nameHob) throw "Hobby not found";
                return nameHob;
            });
        });
    },

    addHob(nameHob, information) {
        if(!nameHob || typeof nameHob != 'string') 
            return Promise.reject("Inappropriate nameHob input in seed.js!");
        if(!information || typeof information != 'string') 
            return Promise.reject("Inappropriate information input in seed.js!");

        return hobby().then((hobCollection) => {
            let newHob = {
                nameHob: nameHob,
                information: information,
                _id: uuid.v4()
            };

            return hobCollection.insertOne(newHob)
            
            // .then((newInsertInformation) => {
            //     return newInsertInformation.insertedId;
            // }).then((newId) => {
            //     return this.getClassById(newId);
            // });
        }).catch((err) => {
            console.log(err);
        });
    },
};

module.exports = exportedMethods;
