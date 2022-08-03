import './bundle.js';
const {ReactDOM, Problem} = bundle;
const problem = ReactDOM.createRoot(document.getElementById('problem'));
problem.render(Problem());
