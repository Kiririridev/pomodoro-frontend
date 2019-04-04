import React from 'react';
import ReactDOM from 'react-dom';

const firstElement = "Main Element";

ReactDOM.render(
	<div>{firstElement}</div>,
	document.getElementById("app")
);

module.hot().accept();

