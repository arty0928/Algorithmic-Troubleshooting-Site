const {Router} = require('express');
const router = Router();
const fs = require('fs');

router.get("/", (req, res)=>{
    fs.readFile(__dirname + '/../template/problemForm.html', 'utf8', (err, data)=>{
        if (err) {
            console.log(err);
            res.send('cannot get template file');
        } else {
            data = data.replace(/{{title}}/g, ``)
                       .replace(/{{rank}}/g, ``)
                       .replace(/{{source}}/g, ``)
                       .replace(/{{id}}/g, ``)
                       .replace(/{{link}}/g, ``)
                       .replace(/{{description}}/g, ``)
                       .replace(/{{input_description}}/g, ``)
                       .replace(/{{output_description}}/g, ``)
                       .replace(/{{input_example}}/g, ``)
                       .replace(/{{output_example}}/g, ``)
                       .replace(/{{author}}/g, ``)
                       .replace(/{{solution_code}}/g, ``)
                       .replace(/{{script}}/g, ``)
            res.send(data);
        }
    });
});

module.exports = router;