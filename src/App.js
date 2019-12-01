import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './timer/components/Timer';
import setupStore from "./redux/setupStore";
import {Provider} from "react-redux";
import "./css/app.css";
import {getPomodoros} from "./api/getPomodoros";
import {Background} from "./components/background/Background";
import MainChartSwitch from "./components/MainScreenSwitch";
import PomodoroToolbar from "./components/toolbar/PomodoroToolbar";

const store = setupStore();

getPomodoros(store.dispatch);

ReactDOM.render(
	<Provider store={store}>
		<Background>
			<PomodoroToolbar/>
			<MainChartSwitch/>
		</Background>
	</Provider>,
	document.getElementById("app"),
);


module.hot.accept();