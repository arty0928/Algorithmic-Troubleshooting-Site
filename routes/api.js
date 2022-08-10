const express = require('express');
const router = express.Router();
const fs = require('fs');

let problems = require('../models/problem');

// form post
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    res.send('hi');
});

router.get('/problemBoard/:id?', (req, res)=>{
    const pageId = req.params.id === undefined ? 1 : Number(req.params.id);
    const pageNumber = problems.length === 0 ? 1 : Math.floor((problems.length - 1) / 10) + 1;
    const problemList = problems.slice((pageId - 1) * 10, pageId * 10).map(val=>{const {id, header} = val; return {id, header}});
    res.json([{pageNumber, header: ['번호', '문제제목', "난이도", "출처", '문제번호']}, ...problemList]);
});

router.get('/problem/:id?', (req, res, next) => {
    const problemId = req.params.id === undefined ? 1 : Number(req.params.id);
    const problem = problems.find(x=>x.id===problemId);
    if (problem === undefined) return next('problem not exist');
    res.json({status: "success", content: problem});
}, (err, req, res, next) => {
    res.json({status: "error", content: err});
});

router.post('/problem', (req, res, next) => {
    const problem = req.body;
    problems.push({
        "id": problems[problems.length-1].id + 1,
        "header": {
            "title": problem.title,
            "rank": problem.rank,
            "source": problem.source,
            "problemId": problem.id,
            "link": problem.link},
        "content": {
            "description": problem.description,
            "input_description": problem.input_description,
            "output_description": problem.output_description,
            "input_example": problem.input_example,
            "output_example": problem.output_example,
            "author": problem.author},
        "solution": {
            "code": problem.solution_code
    }});
    fs.writeFileSync(__dirname + "/../models/problem.json", JSON.stringify(problems));
    res.redirect('/problemBoard');
});

router.delete('/problem/:id', (req, res, next) => {
    const pageId = Number(req.params.id);
    const index = problems.findIndex(problem=>problem.id===pageId);
    if (index == -1) return next('no such problem');
    problems.splice(index, 1);
    fs.writeFileSync(__dirname + "/../models/problem.json", JSON.stringify(problems));
    res.send({status: "success"});
}, (err, req, res) => {
    res.send({status: "error", content: err});
});

module.exports = router;