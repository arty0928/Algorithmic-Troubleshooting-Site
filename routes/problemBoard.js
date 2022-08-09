const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {StaticRouter} = require('react-router-dom/server');
const {Router} = require('express');
const router = Router();
const ProblemBoard = require('../babel/ProblemBoard/ProblemBoard').default;

router.get('/:id?', (req, res, next) => {
    // id가 있을 때, id가 숫자가 아니거나 양수가 아닌 경우 에러처리
    if (req.params.id !== undefined && (!Number(req.params.id) || req.params.id <= 0)) return next('잘못된 id 요청');
    
    // id가 없거나, id가 숫자인 경우
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <title></title>
            <link href="/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <div id="root">${ReactDOMServer.renderToString(React.createElement(StaticRouter, {location: req.url}, 
                React.createElement(ProblemBoard)))}</div>
            <script type="module">
                import '/bundle.js';
                const {React, ReactDOM, BrowserRouter, StaticRouter, ProblemBoard} = bundle;
                const root = ReactDOM.hydrateRoot(document.getElementById('root'), React.createElement(BrowserRouter, ${JSON.stringify({basename:"/problemBoard"})}, 
                    React.createElement(ProblemBoard)));
            </script> 
        </body>
    </html>
    `);
});

module.exports = router;