import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './fonts/icomoon/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/jquery-ui.css';
import './fonts/flaticon/font/flaticon.css';
import './css/aos.css';
import './css/style.css';
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
