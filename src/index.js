import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './timer/components/Timer.js';

ReactDOM.render(
	<Timer/>,
	document.getElementById("app"),
);

module.hot.accept();