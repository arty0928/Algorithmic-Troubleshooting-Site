const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('hi');
});

router.get('/problem', (req, res)=>{
    res.json([{pageNumber: 3, header: ['문제번호', '문제제목']}, {title: 'aaa', content: 'bbb'}, {title:'ccc', content: 'ddd'}]);
});

module.exports = router;