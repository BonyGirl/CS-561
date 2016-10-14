const express = require('express');
const router = express.Router();
const data = require("../data");
const classData = data.classData;

router.get("/details", (req, res) => {
    classData.getClassByCourseCode(req.query.code).then((details) => {
        res.status(200).json({
                name: details.courseName,
                professor: details.professor,
                description: details.description
        });
    }, (error) => {
        res.status(404).json({message: "not found such course!"});
    });
});

router.get("/", (req, res) => {
    classData.getAllClasses().then((classList) => {
        //console.log(typeof classList);
        let partOfClassList = [];
        for(let i = 0; i < classList.length; i++) {
            partOfClassList.push({coursecode: classList[i].courseCode});
        }
        res.status(200).json(partOfClassList);
    }, () => {
        // Something went wrong with the server!
        res.status(500).send();
    });
});



router.post("/", (req, res) => {
    // Not implemented
    res.status(501).send();
});

module.exports = router;