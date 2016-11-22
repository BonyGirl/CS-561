const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const notes = data.notes;


dbConnection().then(db => {
    return db.dropDatabase().then(() => {
        return dbConnection;
    }).then((db) => {
        // return notes.createNote("title","summary","body");
        return notes.getALlNotes();
    }).then((a) =>{
        console.log(a);
    }).then(() => {
        console.log("Done seeding database");
        db.close();
    });
}, (error) => {
    console.error(error);
});