const mongoCollections = require("../config/mongoCollections");
const classData = mongoCollections.classData;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllClasses() {
        return classData().then((classCollection) => {
            return classCollection.find({}).toArray();
        });
    },

    getClassByCourseCode(courseCode) {
        if(!courseCode || typeof courseCode != 'string') 
            return Promise.reject("Inappropriate courseCode input in seed.js!");

        return classData().then((classCollection) => {
            return classCollection.findOne({ courseCode: courseCode }).then((courseCode) => {
                if (!courseCode) throw "Course code not found";
                return courseCode;
            });
        });
    },

    addClass(courseCode, name, professor, description) {
        if(!courseCode || typeof courseCode != 'string') 
            return Promise.reject("Inappropriate courseCode input in seed.js!");
        if(!name || typeof name != 'string') 
            return Promise.reject("Inappropriate name input in seed.js!");
        if(!professor || typeof professor != 'string') 
            return Promise.reject("Inappropriate professor input in seed.js!");
        if(!description || typeof description != 'string') 
            return Promise.reject("Inappropriate description input in seed.js!");

        return classData().then((classCollection) => {
            let newClass = {
                courseName: name,
                professor: professor,
                description: description,
                courseCode: courseCode,
                _id: uuid.v4()
            };

            return classCollection.insertOne(newClass);
            // .then((code) => {
            //     console.log(code);
            //     return this.getClassByCourseCode(code);
            

            // .then((newInsertInformation) => {
            //     return newInsertInformation.insertedId;
            // }).then((courseCode) => {
            //     return this.getClassByCourseCode(courseCode);
            // });
        }).catch((err) => {
            console.log(err);
        });      
    },

    //haven't used it yet
    updateClass(courseCode, name, professor, description) {
        return this.getClassByCourseCode(courseCode)
            .then((currentClass) => {
                let _updateClass = {
                    courseName: name,
                    professor: professor,
                    description: description
                };

                return classCollection.updateOne({ courseCode: courseCode }, _updateClass).then(() => {
                    return this.getClassByCourseCode(courseCode);
                });
        });
    }
}

module.exports = exportedMethods;