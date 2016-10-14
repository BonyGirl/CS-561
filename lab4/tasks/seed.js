const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const education = data.education;
const hobby = data.hobby;
const classData = data.classData;

dbConnection().then(db => {
    return db.dropDatabase()
    .then(() => {
        return dbConnection;
    })
    .then(() => {
        return education.addEdu("South China University Of Technology", "undergrad", "Bachelor of Software Engeneering");
    })
    .then(() => {
        return education.addEdu("YUSS", "highschool");
    })
    .then(() => {
        return education.addEdu("West Covina", "highschool");
    })
    .then(() => {
        return hobby.addHob("Writting blog", "http://caoyudong.com");
    })
    .then(() => {
        return hobby.addHob("Baskteball", "Center");
    })
    .then(() => {
        return classData.addClass("CS 546WS", "Web Programming", "Philip Barresi", "Perfect");
    })
    .then(() => {
        return classData.addClass("CPE 695A", "Applied Machine Learning", "Rong Duan", "Perfect");
    })
    .then(() => {
        return classData.addClass("CS 548A", "Engr'g Enterprise Software Sys.", "Dominic Duggan", "Perfect");
    })    
    .then(() => {
        return classData.addClass("CS 562A", "Database Management Systems II", "kim", "Great");
    })
    .then(() => {
        return classData.addClass("CS 561A", "Database Management Systems I", "kim", "Amazing");
    })
    .then(() => {
        return classData.addClass("CS 600", "Algorithm", "Zhenshu Zhang", "Terrific");
    })
    .then(() => {
        console.log("Done seeding class database");
        db.close();
    });
}, (error) => {
    console.error(error);
});