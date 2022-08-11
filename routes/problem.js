const fs = require('fs');
const axios = require('axios');
const {apiURI} = require('../api/apiURI');
const {Router} = require('express');
const router = Router();

const problemRegisterRouter = require('./problem/problemRegister');

router.use('/register', problemRegisterRouter);

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
                        const problem = val.content;
                        data = data.replace(/{{problem_number}}/g, `${problem.header.source} ${problem.header.problemId}`)
                            .replace(/{{problem_title}}/g, problem.header.title)
                            .replace(/{{problem_description}}/g, problem.content.description)
                            .replace(/{{problem_input_description}}/g, problem.content.input_description)
                            .replace(/{{problem_output_description}}/g, problem.content.output_description)
                            .replace(/{{problem_input_example}}/g, problem.content.input_example)
                            .replace(/{{problem_output_example}}/g, problem.content.output_example)
                            .replace(/{{problem_author}}/g, problem.content.author)
                            .replace(/{{link_problem}}/g, `/problem/${req.params.id}`)
                            .replace(/{{link_solution}}/g, `/problem/${req.params.id}/solution`);
                        res.send(data);
                    }
                });
        }
    });
});

router.get('/:id/solution', (req, res) => {
    fs.readFile(__dirname + '/template/solution.html', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.send('cannot get template file');
        } else {
            getProblemAPI(req.params.id)
                .then(val => {
                    if (val.status === "error") res.send(val.content);
                    else {
                        const problem = val.content;
                        data = data.replace(/{{problem_number}}/g, `${problem.header.source} ${problem.header.problemId}`)
                                .replace(/{{link_problem}}/g, `/problem/${req.params.id}`)
                                .replace(/{{link_solution}}/g, `/problem/${req.params.id}/solution`);
                        res.send(data);
                    }
                });
        }
    });
});

module.exports = router;