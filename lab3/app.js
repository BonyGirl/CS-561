const todo = require("./todo");

const connection = require("./mongoConnection");

// let addHW = todo.createTask("HW", "lab1");

// let  a = addHW.then((HW) => {
//     console.log(HW);
//     return connection();
// }).then((db) => {
//     return db.close();
// });

let HW = todo.getTask('57ed96241766e5d98f8fe8a7');

HW.then((hw) => {
    console.log(hw);
});