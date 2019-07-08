import React from "react";
import * as PropTypes from "prop-types";

const PomodoroRow = () => {

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

	return <li>
		<text>{this.props.pomodoroId}</text>
		<text>{this.props.userId}</text>
		<text>{this.props.pomodoroDate}</text>
		<text>{this.props.length}</text>
		<text>{this.props.description}</text>
		<text>{this.props.tag}</text>
	</li>;
};

export default PomodoroRow;