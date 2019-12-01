import React from "react";
import * as PropTypes from "prop-types";


const PomodoroRow = props => {

	const CSS_ID = "pomodoroRow";

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

	return <div id={CSS_ID}>
		<p>PomodoroId: {props.pomodoro.pomodoroId}</p>
		<p>UserId : {props.pomodoro.userId}</p>
		<p>Date: {props.pomodoro.pomodoroDate}</p>
		<p>Length: {props.pomodoro.length}</p>
		<p>Description: {props.pomodoro.description}</p>
		<p>Tag: {props.pomodoro.tag}</p>
	</div>;
};

export default PomodoroRow;