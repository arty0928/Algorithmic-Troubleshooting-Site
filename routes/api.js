const { Router } = require('express');
const router = Router();

const problems = require('../models/problem');

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

module.exports = router;