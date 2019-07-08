import * as React from 'react';
import {getPomodoros, postPomodoro} from '../../api/api';
import PomodoroTable from "./table/PomodoroTable";
import ButtonPad from "./table/ButtonPad";

//todo fix bug
//todo split to component and container
//todo rewrite to functional component
//todo plan redux

const SAMPLE_DATA = {
	pomodoroId: 0,
	userId: "kiri",
	pomodoroDate: "1994-06-23",
	length: 20,
	description: "testFetches",
	tag: "TEST",
};

//let pomodoros = getPomodoros();

export default class Timer extends React.Component {

	timer;

	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			isOn: false,
			start: 0,
		};

		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
	}

	startTimer() {
		this.setState({
			isOn: true,
			time: this.state.time,
			start: Date.now() - this.state.time,
		});
		this.timer = setInterval(() => this.setState({
			time: Date.now() - this.state.start,
		}), 1);
	};


	stopTimer() {
		this.setState({
			isOn: false,
		});
	};

	resetTimer() {
		this.setState({
			time: 0,
			isOn: false,
		});
	};

	render() {
		//	console.log("TIMER" + JSON.stringify(pomodoros));

		// let fetch = <button onClick={getPomodoros}>FETCH</button>;
		// let postFetch = <button onClick={() => postPomodoro(SAMPLE_DATA)}>POST FETCH</button>;
		let pomodoroTable = <PomodoroTable/>;
		let buttonPad = <ButtonPad/>;

		let start = (this.state.time === 0) ?
			<button onClick={this.startTimer}>START</button> :
			null;

		let stop = (this.state.time == 0) ?
			null :
			<button onClick={this.stopTimer}>STOP</button>;

		let resume = (this.state.time == 0 || this.state.isOn) ?
			null :
			<button onClick={this.startTimer}>RESUME</button>;

		let reset = (this.state.time == 0 || this.state.isOn) ?
			null :
			<button onClick={this.resetTimer}>RESET</button>;

		return (
			<>
				<h3>timer: {(this.state.time)}</h3>

				{start}
				{resume}
				{stop}
				{reset}
				{pomodoroTable}
				{buttonPad}
			</>
		);
	}
}



