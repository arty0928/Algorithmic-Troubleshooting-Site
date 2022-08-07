const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Router } = require('express');
const router = Router();
const ProblemBoard = require('../babel/ProblemBoard/ProblemBoard').default;

const htmlTemplate = `
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link href="./css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <div id="root">${ReactDOMServer.renderToString(React.createElement(ProblemBoard))}</div>
        <script type="module">
            import './bundle.js';
            const {React, ReactDOM, ProblemBoard} = bundle;
            const root = ReactDOM.hydrateRoot(document.getElementById('root'), React.createElement(ProblemBoard));
        </script> 
    </body>
</html>
`;

router.get('/', (req, res) => {
    res.send(htmlTemplate);
});

router.get('/:id', (req, res, next) => {
    // id가 숫자가 아니거나 양수가 아닌 경우 에러처리
    if (!Number(req.params.id) || req.params.id <= 0) return next('잘못된 id 요청');

    console.log(req.params.id);
});

module.exports = router;