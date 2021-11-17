import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root"),
)

//reportWebVitals();

//ReactDOM.render(<App planet={{name: "Earth", distance: 1000}}/>,document.getElementById('root'));

