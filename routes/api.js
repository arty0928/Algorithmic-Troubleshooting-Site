const { Router } = require('express');
const router = Router();

const problem = require('../models/problem');
const probleminfo = require('../models/probleminfo')

router.get('/', (req, res) => {
    res.send('hi');
});

router.get('/problemBoard/:id?', (req, res)=>{
    const pageId = req.params.id === undefined ? 1 : Number(req.params.id);
    const pageNumber = problem.length === 0 ? 1 : Math.floor((problem.length - 1) / 10) + 1;
    res.json([{pageNumber, header: ['문제번호', '문제제목']},
        ...problem.slice((pageId - 1) * 10, pageId * 10)
    ]);
});

router.get('/problem/:id?', (req, res, next) => {
    const problemId = req.params.id === undefined ? 1 : Number(req.params.id);
    const problem = probleminfo[problemId];
    if (problem === undefined) return next('problem not exist');
    res.json({status: "success", content: probleminfo[problemId]});
}, (err, req, res, next) => {
    res.json({status: "error", content: err});
});

module.exports = router;