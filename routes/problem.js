const ReactDOMServer = require('react-dom/server');
const { Router } = require('express');
const router = Router();
const { bundle } = require('./bundle');
const { Problem } = bundle;

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