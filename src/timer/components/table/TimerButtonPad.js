import React from 'react';
import Button from "@material-ui/core/Button/Button";

const clazz = 'timer-button';

export const TimerButtonPad = props => {

	//todo proptypes

	const {startTimer, pauseTimer, resetTimer, isOn, isPaused, resumeTimer} = props;

	const start = !isOn && !isPaused ?
		<Button onClick={startTimer} className={clazz}>START</Button> : null;
	const pause = !!isOn && !isPaused ?
		<Button onClick={pauseTimer} className={clazz}>PAUSE</Button> : null;
	const resume = !!isPaused ?
		<Button onClick={resumeTimer} className={clazz}>RESUME</Button> : null;
	const reset = !!isPaused ?
		<Button onClick={resetTimer} className={clazz}>RESET</Button> : null;

	return <>
		{start}
		{resume}
		{pause}
		{reset}
	</>;
};

