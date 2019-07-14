import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/main/Timer.js';
import setupStore from "./redux/setupStore";
import {Provider} from "react-redux";
import "./css/app.css";
import {getPomodoros} from "./api/getPomodoros";
import {Background} from "./components/background/Background";

const store = setupStore();

getPomodoros(store.dispatch);

ReactDOM.render(
	<Provider store={store}>
		<Background>
			<Timer/>
		</Background>
	</Provider>,
	document.getElementById("app"),
);

module.hot.accept();