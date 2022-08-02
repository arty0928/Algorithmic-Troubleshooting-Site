import './bundle.js';
const {ReactDOM, UserButton} = bundle;
const userButton = document.getElementById('user-button');
ReactDOM.render(UserButton(), userButton);
