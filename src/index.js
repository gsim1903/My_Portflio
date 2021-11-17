import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(<App planet={{name: "Earth", distance: 1000}}/>,document.getElementById('root'));

