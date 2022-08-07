const { Router } = require('express');
const router = Router();

const problem = require('../models/problem');

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

module.exports = router;