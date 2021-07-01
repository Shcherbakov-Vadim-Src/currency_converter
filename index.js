import React from "react";
import ReactDOM from 'react-dom';
import "./style.css";
import { Provider } from "react-redux";
import Main from "./components/Main";
import store from './redux/store';

function App() {

    return (<Provider store={store}>
        <Main />
        </Provider>
    )
}

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);