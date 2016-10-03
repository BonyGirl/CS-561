const mongoCollections = require("./mongoCollections");
const todo = mongoCollections.todo;

let exportedMethods = {
    // This is a fun new syntax that was brought forth in ES6, where we can define
    // methods on an object with this shorthand!
    getAllTask() {
        return todo().then((todoCollection) => {
            return todoCollection.find();
        });
    },
    getTask(id) {
        if (!id) 
            return Promise.reject("You must provide an id to search for");
        
        return todo().then((todoCollection) => {
            return todoCollection.findOne({_id: id});
        });
    },
    createTask(title, description) {
        if (!title) 
            return Promise.reject("You must provide a title for your task");
        
        if (!description) 
            return Promise.reject("You must provide a description for your task");
        
        return todo().then((todoCollection) => {
            let newTodo = {
                title: title,
                description: description
            };
            
            return todoCollection
                .insertOne(newTodo)
                .then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                })
                .then((newId) => {
                    console.log(this.getTask(newId));
                    return this.getTask(newId);
                });
        });
    // },
    // removeDog(id) {
    //     if (!id) 
    //         return Promise.reject("You must provide an id to search for");
        
    //     return dogs().then((dogCollection) => {
    //         return dogCollection
    //             .removeOne({_id: id})
    //             .then((deletionInfo) => {
    //                 if (deletionInfo.deletedCount === 0) {
    //                     throw(`Could not delete dog with id of ${id}`)
    //                 }
    //             });
    //     });
    // },
    // updateDog(id, name, breeds) {
    //     if (!id) 
    //         return Promise.reject("You must provide an id to search for");
        
    //     if (!breeds || !Array.isArray(breeds)) 
    //         return Promise.reject("You must provide an array of breeds");
        
    //     if (breeds.length === 0) 
    //         return Promise.reject("You must provide at least one breed.");
        
    //     return dogs().then((dogCollection) => {
    //         let updatedDog = {
    //             name: name,
    //             breeds: breeds
    //         };

    //         return dogCollection.updateOne({
    //             _id: id
    //         }, updatedDog).then(() => {
    //             return this.getDogById(id);
    //         });
    //     });
    }
}

module.exports = exportedMethods;