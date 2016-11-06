const express = require('express');
const router = express.Router();
const data = require("../data");
const calculator = data.calculator;

router.get("/static", (req, res) => {
    res.render("calculator/static", {});
});

router.get("/server", (req, res) => {
    res.render("calculator/server", {});
});

router.post("/server", (req, res) => {
    // let operation = (req.body.operation || "add").toLowerCase();
    // let firstNumber = parseInt(req.body.number1);
    // let secondNumber = parseInt(req.body.number2);

    var inputText = req.body.inputText;
    var inputString = req.body.inputString;
    var firstNumber = parseInt(req.body.number1);
    var secondNumber = parseInt(req.body.number2);
    let result;

    try {

        result = calculator.textManipulator(inputText,inputString,firstNumber,secondNumber);
        
    } catch (e) {
        res.render("calculator/server", { firstNumber: firstNumber, secondNumber: secondNumber, inputText: inputText,inputString:inputString, error: e });
        return;
    }

    res.render("calculator/server", { firstNumber: firstNumber, secondNumber: secondNumber, inputText: inputText,inputString:inputString, result: result });
});

module.exports = router;