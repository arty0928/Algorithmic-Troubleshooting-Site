const fs = require('fs');
const axios = require('axios');
const {apiURI} = require('../api/apiURI');
const {Router} = require('express');
const router = Router();

const getProblemAPI = async (id) => {
    try {
        const res = await axios.get(apiURI + `/problem/${id}`);
        return res.data;
    } catch(e) {
        return e;
    }
};

router.get('/:id', (req, res) => {
    fs.readFile(__dirname + '/template/problem.html', 'utf8', (err, data)=>{
        if (err) {
            console.log(err);
            res.send('cannot get template file');
        } else {
            getProblemAPI(req.params.id)
                .then(val => {
                    if (val.status === "error") res.send(val.content);
                    else {
                        const content = val.content;
                        data = data.replace(/{{problem_number}}/g, content.problem_number)
                            .replace(/{{problem_title}}/g, content.problem_title)
                            .replace(/{{problem_header_time}}/g, content.problem_header.time)
                        res.send(data);
                    }
                });
        }
    });
});

module.exports = router;