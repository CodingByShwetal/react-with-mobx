import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import appStore from './stores/appStore';
const root = (
    <Provider store = {appStore}>
        <App/>
    </Provider>
)
ReactDOM.render(root, document.getElementById('root'));
