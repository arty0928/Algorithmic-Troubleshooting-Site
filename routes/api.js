const { Router } = require('express');
const router = Router();

const problem = require('../models/problem');

router.get('/', (req, res) => {
    res.send('hi');
});

router.get('/problem', (req, res)=>{
    res.json([{pageNumber: 3, header: ['문제번호', '문제제목']},
        ...problem
    ]);
});

module.exports = router;