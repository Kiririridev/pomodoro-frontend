import React from 'react';
import Button from "@material-ui/core/Button/Button";

const clazz = 'timer-button';

export const TimerButtonPad = props => {

	//todo proptypes

	const {startTimer, pauseTimer, resetTimer, time, isOn} = props;

	const start = (time === 0) ?
		<Button onClick={startTimer} className={clazz}>START</Button> : null;
	const pause = (time !== 0 && isOn == true) ?
		<Button onClick={pauseTimer} className={clazz}>PAUSE</Button> : null;
	const resume = (time === 0 || isOn) ?
		null : <Button onClick={startTimer} className={clazz}>RESUME</Button>;
	const reset = (time === 0 || isOn) ?
		null : <Button onClick={resetTimer} className={clazz}>RESET</Button>;

	return <>
		{start}
		{resume}
		{pause}
		{reset}
	</>;
};

