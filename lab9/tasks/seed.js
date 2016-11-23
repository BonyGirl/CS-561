const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const notes = data.notes;


dbConnection().then(db => {
    return db.dropDatabase().then(() => {
        return dbConnection;
    }).then((db) => {
        return notes.createNote("title1","summary1","body1");
        // return notes.getALlNotes();
    }).then(() =>{
        return notes.createNote("title2","summary2","body2");
    }).then(() => {
        console.log("Done seeding database");
        db.close();
    });
}, (error) => {
    console.error(error);
});