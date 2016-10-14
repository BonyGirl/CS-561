"use strict"

const express = require('express');
const routerEdu = express.Router();
const data = require("../data");
const eduData = data.education;

routerEdu.get("/", (req, res) => {
    eduData.getAllEdu().then((eduList) => {
        let partOfeduList = [];
        for(let i = 0; i < eduList.length; i++) {
            partOfeduList.push({school: eduList[i].nameEdu});
        }
        res.status(200).json(partOfeduList);
    }, () => {
        // Something went wrong with the server!
        res.status(500).send();
    });
});

routerEdu.get("/highschool", (req, res) => {
    let level = "highschool";
    eduData.getEduByLevel(level).then((eduSchool) => {
        res.status(200).json({name: eduSchool.nameEdu});
    }, (error) => {
        res.status(404).json({message: "High school not found"});
    });
});

routerEdu.get("/undergrad", (req, res) => {
    let level = "undergrad";
    eduData.getEduByLevel(level).then((eduSchool) => {
        res.status(200).json({
            name: eduSchool.nameEdu,
            degree: eduSchool.degree
        });
    }, (error) => {
        res.status(404).json({message: "Undergrad not found"});
    });
});



routerEdu.post("/", (req, res) => {
    // Not implemented
    res.status(501).send();
});

module.exports = routerEdu;