const {Router} = require('express');
const router = Router({mergeParams: true});
const fs = require('fs');
const {getProblemAPI} = require('../api/problem');

const script = `
<script>
    const input = () => {
        const inputs = [...document.getElementsByTagName('input')].reduce((acc, input)=>input.name?{...acc, [input.name]: input.value}:acc, {});
        const textareas = [...document.getElementsByTagName('textarea')].reduce((acc, input)=>input.name?{...acc, [input.name]: input.value}:acc, {});
        return {...inputs, ...textareas};
    };
    document.getElementById("submit").onclick = (e)=>{
        e.preventDefault();
        const body = JSON.stringify(input());
        const link = document.location.href.split('/');
        const id = link[link.length-2];
        fetch(\`/api/problem/\${id}\`, {method: "PUT", headers: {'Content-Type': 'application/json'}, body}).then(val=>{
            location.href = \`/problem/\${id}\`;
        }).catch(console.error);
    }
</script>
`;

router.get("/", (req, res)=>{
    fs.readFile(__dirname + '/../template/problemForm.html', 'utf8', (err, data)=>{
        if (err) {
            console.log(err);
            res.send('cannot get template file');
        } else {
            getProblemAPI(req.params.id)
                .then(val => {
                    if (val.status === "error") res.send(val.content);
                    else {
                        const problem = val.content;
                        data = data.replace(/{{title}}/g, problem.header.title)
                                   .replace(/{{rank}}/g, problem.header.rank)
                                   .replace(/{{source}}/g, problem.header.source)
                                   .replace(/{{id}}/g, problem.header.problemId)
                                   .replace(/{{link}}/g, problem.header.link)
                                   .replace(/{{description}}/g, problem.content.description)
                                   .replace(/{{input_description}}/g, problem.content.input_description)
                                   .replace(/{{output_description}}/g, problem.content.output_description)
                                   .replace(/{{input_example}}/g, problem.content.input_example)
                                   .replace(/{{output_example}}/g, problem.content.output_example)
                                   .replace(/{{author}}/g, problem.content.author)
                                   .replace(/{{solution_cpp}}/g, problem.solution.cpp)
                                   .replace(/{{solution_java}}/g, problem.solution.java)
                                   .replace(/{{solution_python}}/g, problem.solution.python)
                                   .replace(/{{solution_code}}/g, problem.solution.code)
                                   .replace(/{{script}}/g, script);
                        res.send(data);
                    }
                });
        }
    });
});

module.exports = router;