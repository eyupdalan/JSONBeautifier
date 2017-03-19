import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import redux from './reducer/reducer';
import {Provider} from 'react-redux';

import "./assets/index.scss";
import "../node_modules/office-ui-fabric-react/dist/css/fabric.min.css";
import "../node_modules/codemirror/lib/codemirror.css";


const store = createStore(redux);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("main"));