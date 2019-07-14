import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './timer/components/Timer.js';
import setupStore from "./redux/setupStore";
import {Provider} from "react-redux";
import "./css/app.css";

const store = setupStore();

ReactDOM.render(
	<Provider store={store}>
		<Timer/>
	</Provider>,
	document.getElementById("app"),
);

module.hot.accept();