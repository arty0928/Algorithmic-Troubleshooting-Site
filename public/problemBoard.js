import './bundle.js';
const {React, ReactDOM, ProblemBoard} = bundle;
const root = ReactDOM.createRoot(document.getElementById('problemBoard'));
root.render(React.createElement(ProblemBoard));
