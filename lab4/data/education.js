"use strict"

const mongoCollections = require("../config/mongoCollections");
const education = mongoCollections.education;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllEdu() {        
        return education().then((eduCollection) => {
            return eduCollection.find({}).toArray();
        });
    },

    getEduByLevel(level) {
        if(!level || typeof level != 'string') 
            return Promise.reject("Inappropriate level input in seed.js!");

        return education().then((eduCollection) => {
            return eduCollection.findOne({level: level }).then((nameEdu) => {
                if (!nameEdu) throw "School not found";
                return nameEdu;
            });
        });
    },

    addEdu(nameEdu, level, degree) {
        if(!nameEdu || typeof nameEdu != 'string') 
            return Promise.reject("Inappropriate nameEdu input in seed.js!");
        if(!level || typeof level != 'string') 
            return Promise.reject("Inappropriate level input in seed.js!");

        return education().then((eduCollection) => {
            let newEdu = {
                nameEdu: nameEdu,
                level: level,
                degree: degree,
                _id: uuid.v4()
            };

            return eduCollection.insertOne(newEdu)
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