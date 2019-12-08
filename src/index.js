import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from'react-redux';
import reducer from './reducer/index';
import './fonts/icomoon/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/jquery-ui.css';
import './fonts/flaticon/font/flaticon.css';
import './css/aos.css';
import './css/style.css';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,{},composeEnhancers(applyMiddleware(thunk))); // redux enhance for inspect dev tool
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));

