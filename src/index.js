import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './timer/components/Timer.js';

const firstElement = new Timer();

ReactDOM.render(
	<Timer/>,
	document.getElementById("app"),
);

module.hot().accept();

