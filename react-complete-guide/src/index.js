import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// WHAT IS GETTING RENDER IS THE 'APP' THAT IS BEING PASS AS PARAMETERS
ReactDOM.render(<App title = "Relevant Persons" />, document.getElementById('root'));
registerServiceWorker();
