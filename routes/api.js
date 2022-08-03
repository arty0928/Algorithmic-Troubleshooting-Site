const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('hi');
});

router.get('/problem', (req, res)=>{
    res.json([{title: 'aaa', content: 'bbb'}, {title:'ccc', content: 'ddd'}]);
});

module.exports = router;