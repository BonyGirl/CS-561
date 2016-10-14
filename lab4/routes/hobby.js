"use strict"

const express = require('express');
const routerHob = express.Router();
const data = require("../data");
const hobData = data.hobby;


routerHob.get("/", (req, res) => {
    hobData.getAllHob().then((hobList) => {
        let partOfHobList = [];
        for(let i = 0; i < hobList.length; i++) {
            partOfHobList.push({name: hobList[i].nameHob})
        }
        res.status(200).json(partOfHobList);
    }, () => {
        // Something went wrong with the server!
        res.status(500).send();
    });
});

routerHob.get("/:nameHob", (req, res) => {
    hobData.getHobByName(req.params.nameHob).then((hobList) => {
        res.status(200).json({
            name: hobList.nameHob,
            information: hobList.information
        });
    }, (error) => {
        res.status(404).json({message: "Hobby not found"});
    });
});

routerHob.post("/", (req, res) => {
    // Not implemented
    res.status(501).send();
});

module.exports = routerHob;