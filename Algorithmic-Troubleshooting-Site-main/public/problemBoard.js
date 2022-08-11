import './bundle.js';
const {React, ReactDOM, BrowserRouter, StaticRouter, ProblemBoard} = bundle;
const root = ReactDOM.createRoot(document.getElementById('problemBoard'));
root.render(React.createElement(BrowserRouter, null, React.createElement(ProblemBoard)));
