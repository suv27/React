import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// WHAT IS GETTING RENDER IS THE 'APP' THAT IS BEING PASS AS PARAMETERS
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
