import React from 'react';
import {getPomodoros} from "../../../api/getPomodoros";
import {connect} from "react-redux";
import {selectPomodoros} from "../../../redux/storeSelectors/storeSelectors";


const SAMPLE_DATA = {
	pomodoroId: 0,
	userId: "kiri",
	pomodoroDate: "1994-06-23",
	length: 20,
	description: "testFetches",
	tag: "TEST",
};

const ButtonPad = props => {

	//todo proptypes

	let fetch = <button onClick={props.getPomodoros}>FETCH</button>;

	return <>
		{fetch}
	</>;
};

const mapStateToProps = state => {
	return {
		pomodoros: selectPomodoros(state),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getPomodoros: () => getPomodoros(dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps)(ButtonPad);
