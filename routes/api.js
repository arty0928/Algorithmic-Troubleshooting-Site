const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('hi');
});

router.get('/problem', (req, res)=>{
    res.send('success');
});

module.exports = router;