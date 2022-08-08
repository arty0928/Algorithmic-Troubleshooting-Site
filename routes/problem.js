const fs = require('fs');
const axios = require('axios');
const {apiURI} = require('../api/apiURI');
const {Router} = require('express');
const router = Router();

const getProblemAPI = async (id) => {
    const res = await axios.get(apiURI + `/problem/${id}`);
    return res.data;
};

router.get('/:id', (req, res) => {
    fs.readFile(__dirname + '/template/problem.html', 'utf8', (err, data)=>{
        if (err) {
            console.log(err);
            res.send('cannot get template file');
        } else {
            getProblemAPI(req.params.id).then(val => {
                data = data.replace(/{{problem_number}}/g, val.problem_number)
                           .replace(/{{problem_title}}/g, val.problem_title)
                           .replace(/{{problem_header_time}}/g, val.problem_header.time)
                res.send(data);
            });
            
        }
    });
});

module.exports = router;