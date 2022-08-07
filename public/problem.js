import './bundle.js';
const {React, ReactDOM, Problem} = bundle;
const root = ReactDOM.createRoot(document.getElementById('problem'));
root.render(React.createElement(Problem));
