import {TextField} from "@material-ui/core";
import * as React from "react";


const preventDefault = (event) => event.preventDefault();

export const TimerInput = props => {
	const {onChange, isDisabled} = props;

	return <TextField
		label="Minutes"
		type="time"
		InputLabelProps={{
			shrink: true,
			margin: 'none',
		}}
		InputProps={{
			step: 1000,
			type: 'number',
			min: '1',
			max: '100',
		}}
		margin={'dense'}
		size={'medium'}
		variant={"standard"}
		name={'time'}
		onChange={onChange}
		onSubmit={preventDefault}
		disabled={isDisabled}
		min={0}
		max={100}
	/>;
};