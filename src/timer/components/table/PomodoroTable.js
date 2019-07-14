import React from 'react';
import PomodoroRow from "./PomodoroRow";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {selectPomodoros} from "../../../redux/storeSelectors/storeSelectors";
import "../../../css/PomodoroTable.css";

const PomodoroTable = props => {

	PomodoroTable.propTypes = {
		pomodoros: PropTypes.array,
	};


	console.log("POMODOROTABLE: " + JSON.stringify(props.pomodoros));
	console.log("POMODOROTABLEPROPS: " + JSON.stringify(props));


	let rows = props.pomodoros.map(pomodoro => <PomodoroRow key={pomodoro.pomodoroId} pomodoro={pomodoro}/>);
	console.log(rows);

	return <ul>
		{rows}
	</ul>;
};

const mapStateToProps = (state) => {
	return {
		pomodoros: selectPomodoros(state),
	};
};

export default connect(
	mapStateToProps,
	undefined)
(PomodoroTable);