import React from 'react';
import PomodoroRow from "./PomodoroRow";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";

const PomodoroTable = props => {

	PomodoroTable.propTypes = {
		pomodoros: PropTypes.object,
	};

	console.log("POMODOROTABLE: " + JSON.stringify(props.pomodoros));

	return props.pomodoros.map(pomodoro => <PomodoroRow pomodoro={pomodoro}/>);
};

const mapStateToProps = (state) => {
	return {
		pomodoros: state.pomodoros,
	};
};

export default connect(
	mapStateToProps)(PomodoroTable);