const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Router } = require('express');
const router = Router();
const Problem = require('../babel/Problem/Problem').default;

router.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title></title>
            </head>
            <body>
                <div id="root">${ReactDOMServer.renderToString(React.createElement(Problem))}</div>
                <script type="module">
                    import './bundle.js';
                    const {React, ReactDOM, Problem} = bundle;
                    const root = ReactDOM.hydrateRoot(document.getElementById('root'), React.createElement(Problem));
                </script> 
            </body>
        </html>
    `);
});

module.exports = router;