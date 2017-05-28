import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
import Form from './components/formComponent';

ReactDOM.render(<Form />, document.getElementById('root'));
registerServiceWorker();
