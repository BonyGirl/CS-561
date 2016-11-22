const mongoCollections = require("./mongoCollections");
const uuid = require('node-uuid');
const notes = mongoCollections.notes;

let exportedMethods = {
    getALlNotes(){
        return notes().then((noteCollection) => {
            return noteCollection.find().toArray();
        });
    },
    getNote(id){
        if (!id) 
            return Promise.reject("You must provide an id to search for");
        
        return notes().then((noteCollection) => {
            return noteCollection.findOne({_id: id});
        });
    },
    createNote(title,summary,body){
        if (!title) 
            return Promise.reject("You must provide a title for your note");
        
        if (!summary) 
            return Promise.reject("You must provide a summary for your note");
        if (!body) 
        return Promise.reject("You must provide a body for your note");
        
        return notes().then((noteCollection) => {
            let newNote = {
                _id : uuid.v4(),
                date : new Date(),
                title: title,
                summary: summary,
                body: body,
            };

            return noteCollection
                .insertOne(newNote)
                .then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                })
                .then((newId) => {
                    return this.getNote(newId);
                });
        });
    }
}

module.exports = exportedMethods;
