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
            <title>문제 게시판</title>
            <link href="/css/bootstrap.min.css" rel="stylesheet">
            <link href="https://webfontworld.github.io/sunn/SUIT.css" rel="stylesheet">
            <style>header{font-family: SUIT;}</style>
        </head>
        <body>
            <header>
                <div class="b-example-divider"></div>  
                <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                            <img src="/img/logo1.PNG">
                        </svg>
                    </a>
                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" class="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="/problemBoard" class="nav-link px-2 link-dark">문제풀기</a></li>
                        <li><a href="/outdoor" class="nav-link px-2 link-dark">대외활동</a></li>
                    </ul>
                    <div class="col-md-3 text-end">
                        <button type="button" class="btn btn-outline-primary me-2">   
                            <a href="/login.html">
                                Login
                            </a>
                        </button>
                        <button type="button" class="btn btn-primary">
                            <a class="btn-primary" href="/signup.html">
                                Sign-up
                            </a>
                        </button>
                    </div>
                </header>
                </div>
            </header>

            <section>
                <div id="root">${ReactDOMServer.renderToString(React.createElement(StaticRouter, {location: req.url}, 
                    React.createElement(ProblemBoard)))}</div>
            </section>
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