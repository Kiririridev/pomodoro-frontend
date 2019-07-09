import React from "react";
import * as PropTypes from "prop-types";

const PomodoroRow = props => {

	PomodoroRow.propTypes = {
		pomodoro: PropTypes.shape({
			pomodoroId: PropTypes.number,
			userId: PropTypes.string,
			pomodoroDate: PropTypes.string,
			length: PropTypes.number,
			description: PropTypes.string,
			tag: PropTypes.string,
		}),
	};

	console.log(JSON.stringify(props));

	return <>
		{props.pomodoro.pomodoroId}
		{props.pomodoro.userId}
		{props.pomodoro.pomodoroDate}
		{props.pomodoro.length}
		{props.pomodoro.description}
		{props.pomodoro.tag}
	</>;
};

export default PomodoroRow;