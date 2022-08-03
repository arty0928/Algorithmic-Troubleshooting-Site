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
                <div id="root">${ReactDOMServer.renderToString(Problem())}</div>
            </body>
        </html>
    `);
});

module.exports = router;