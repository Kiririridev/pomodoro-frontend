import * as React from 'react';
import {TimerButtonPad} from "./table/TimerButtonPad";
import {formatTime} from "./utils/formatTime";
import {sendPomodoro} from "./timer/sendPomodoro";
import {TimerInput} from "./timer/TimerInput";
import {PomodoroCircularProgress} from "./PomodoroCircularProgress";
import {PomodoroPropertiesInput} from "./PomodoroPropertiesInput";

//todo fix bug
//todo split to component and container
//todo rewrite to functional component
//todo plan redux

const renderTimer = (time) => <h3>Timer: {formatTime(time)}</h3>;

export default class Timer extends React.Component {

	timer;

	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			isOn: false,
			isPaused: false,
			targetTime: 0,
		};
	}

	handlePomodoroEnd() {
		sendPomodoro();
		clearInterval(this.timer);
		this.setState({
			time: 0,
			isOn: false,
			isPaused: false,
		});
	}

	checkIfFinishied() {
		if (this.state.time <= 0) {
			this.handlePomodoroEnd();
		}
	}

	//todo change time speed
	startTimer() {

		if (!!this.state.targetTime) {
			this.setState({
				isOn: true,
				isPaused: false,
				time: this.state.targetTime,
			});
			this.timer = setInterval(() => {
				this.setState({
					time: this.state.time - 1,
				});

				this.checkIfFinishied();
			}, 50);
		} else {
			console.log('please set time');
		}
	};

	resumeTimer() {
		this.setState({
			isPaused: false,
		});
		this.timer = setInterval(() => this.setState({
			time: this.state.time - 1,
		}), 1000);
	}

	pauseTimer() {
		clearInterval(this.timer);
		this.setState({
			isPaused: true,
		});
	};

	resetTimer() {
		clearInterval(this.timer);
		sendPomodoro();
		this.setState({
			time: 0,
			isOn: false,
			isPaused: false,
		});
	};

	handleTimeUpdate(event) {
		const targetTimeSeconds = event.target.value * 60;

		this.setState({targetTime: targetTimeSeconds});
	}

	isTimerInputDisabled() {
		return this.state.isOn || this.state.isPaused;
	}

	getProgress() {

		if (!this.state.isOn) {
			return 100;
		} else {
			return (this.state.time / this.state.targetTime) * 100;
		}
	}

	renderTimerButtonPad() {
		return <TimerButtonPad
			startTimer={() => this.startTimer()}
			pauseTimer={() => this.pauseTimer()}
			resetTimer={() => this.resetTimer()}
			resumeTimer={() => this.resumeTimer()}
			isOn={this.state.isOn}
			isPaused={this.state.isPaused}
			time={this.state.time}/>;
	}

	renderTimerInput() {
		return <TimerInput
			onChange={(event) => this.handleTimeUpdate(event)}
			isDisabled={this.isTimerInputDisabled()}/>;
	}

	renderCircularProgress() {
		return <PomodoroCircularProgress
			progress={this.getProgress()}
		/>;
	}

	render() {

		return (
			<div className={'timer-pad'}>
				<div className={'timer-pad-row'}>
					{this.renderCircularProgress()}
				</div>
				<div className={'timer-pad-row'}>
					{renderTimer(this.state.time)}
				</div>
				<div className={'timer-pad-row'}>
					{this.renderTimerInput()}
				</div>
				<div className={'timer-pad-row'}>
					{this.renderTimerButtonPad()}
				</div>
				<div>
					<PomodoroPropertiesInput/>
				</div>
			</div>
		);
	}
}



