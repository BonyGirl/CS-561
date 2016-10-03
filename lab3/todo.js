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
    },
    removeTask(id) {
        if (!id) 
            return Promise.reject("You must provide an id to search for");
        
        return todo().then((todoCollection) => {
            return todoCollection
                .removeOne({_id: id})
                .then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        throw(`Could not delete task with id of ${id}`)
                    }
                });
        });
    },
    completeTask(id) {
        if (!id) 
            return Promise.reject("You must provide an id to search for");
        
    }
}

module.exports = exportedMethods;