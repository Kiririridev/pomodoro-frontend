import React from 'react';
import {getPomodoros, postPomodoro} from "../../../api/api";
import {connect} from "react-redux";


const SAMPLE_DATA = {
	pomodoroId: 0,
	userId: "kiri",
	pomodoroDate: "1994-06-23",
	length: 20,
	description: "testFetches",
	tag: "TEST",
};

const ButtonPad = props => {

	console.log("ButtonPad props: ");
	console.log(JSON.stringify(props));

	//todo proptypes

	let fetch = <button onClick={props.getPomodoros}>FETCH</button>;
//	let postFetch = <button onClick={() => postPomodoro(SAMPLE_DATA)}>POST FETCH</button>;

	return <>
		{fetch}
		{/*{postFetch}*/}
	</>;
};

const mapStateToProps = {};

const mapDispatchToProps = {
	getPomodoros,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps)(ButtonPad);
