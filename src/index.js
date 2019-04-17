import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';

const firstElement = "Main Element";

ReactDOM.render(
	<div>{firstElement}</div>,
	document.getElementById("app")
);

module.hot().accept();

