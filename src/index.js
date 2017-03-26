import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import redux from './reducer/reducer';
import {Provider} from 'react-redux';

import "./assets/index.scss";
import "../node_modules/codemirror/lib/codemirror.css";

const store = createStore(redux);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("main"));