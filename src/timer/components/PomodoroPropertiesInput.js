import React from "react";
import {TextField} from '@material-ui/core';

export const PomodoroPropertiesInput = props => {

	const toUpperCase = (event) => {
		event.target.value = event.target.value.toUpperCase();
	};

	return <div className={'timer-properties-input'}>
		<TextField
			onChange={toUpperCase}
			className={'properties-text-field'}
			label={'Tag'}/>
		<TextField
			className={'properties-text-field'}
			label={"Description"}/>
	</div>;
};


//
// PomodoroId: 0
//
// UserId : kiri
//
// Date: 1994-06-23
//
// Length: 20
//
// Description: firstPom
//
// Tag: