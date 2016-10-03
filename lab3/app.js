const todoItems = require("./todo");
const connection = require("./mongoConnection");

let firstTaskId = "";
let secondTaskId = "";
let createdTask1 = todoItems.createTask("Ponder Dinosaurs", 
                                    "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");

createdTask1.then((newTask) => {
    console.log(newTask);
    firstTaskId = newTask._id;
    return connection();
}).then((db)=>{
    db.close();
});

let createdTask2 = todoItems.createTask("Play Pokemon with Twitch TV", 
                                        "Should we revive Helix?");

createdTask2.then((newTask) => {
    // console.log(newTask);
    secondTaskId = newTask._id;
});

var getAll = todoItems.getAllTask();

getAll.then((task) => {
    console.log(task);
})


let removeTask = todoItems.removeTask(firstTaskId);
let tryToGetTask = removeTask.then(() => {
    return todoItems.getTask(firstTaskId);
});

// tryToGetTask.catch((error) => {
//     // Should error out
//     console.error(error);
// })

getAll = todoItems.getAllTask();

getAll.then((task) => {
    console.log(task);
})


var taskPromise = todoItems.getTask(secondTaskId);

let finishedTask = taskPromise.then((task) => {    
    return todoItems.completeTask(task._id);    
});

finishedTask.then((task) => {
    console.log(task);
});

taskPromise = todoItems.getTask(secondTaskId);

taskPromise.then((task) => {
    console.log(task);
})

removeTask = todoItems.removeTask(secondTaskId).then((db)=>{
    return db.close();
});




