const { Router } = require('express');
const router = Router();

router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

module.exports = router;