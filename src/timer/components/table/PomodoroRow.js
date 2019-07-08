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

	// return <li key={props.pomodoroId}>
	// 	<Text>{props.pomodoroId}</Text>
	// 	<Text>{props.userId}</Text>
	// 	<Text>{props.pomodoroDate}</Text>
	// 	<Text>{props.length}</Text>
	// 	<Text>{props.description}</Text>
	// 	<Text>{props.tag}</Text>
	// </li>;

	return <li key={props.pomodoro.pomodoroId}>
		{props.pomodoro.pomodoroId.toString()}
	</li>;
};

export default PomodoroRow;