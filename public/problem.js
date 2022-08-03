import './bundle.js';
const {ReactDOM, UserButton} = bundle;
const userButton = ReactDOM.createRoot(document.getElementById('user-button'));
userButton.render(UserButton());
