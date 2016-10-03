const todoItems = require("./todo");

// let createdTask = todoItems.createTask("My First Task", "This is the first thing I need to do today");

// createdTask.then((newTask) => {
//     console.log(newTask);
// });

// let taskPromise = todoItems.getTask("9a72a609-7d51-4caa-b30a-5ca45747ef6c");

// taskPromise.then((task) => {
//     console.log(task);
// })


// let removeTask = todoItems.removeTask("cc477d26-72ad-4f7d-8057-9a7ea3caab73");

// let tryToGetTask = removeTask.then(() => {
//     return todoItems.getTask("9a72a609-7d51-4caa-b30a-5ca45747ef6c");
// });

// tryToGetTask.catch((error) => {
//     // Should error out
//     console.error(error);
// })


// let taskPromise = todoItems.getTask("fde2f137-a175-453e-b048-c70d9d1fc08d");

// let finishedTask = taskPromise.then((task) => {    
//     return todoItems.completeTask(task._id);    
// });

// finishedTask.then((task) => {
//     console.log(task);
// });


let getAll = todoItems.getAllTask();

getAll.then((task) => {
    console.log(task);
})