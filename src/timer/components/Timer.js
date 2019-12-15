import * as React from 'react';
import {TimerButtonPad} from "./table/TimerButtonPad";
import {formatTime} from "./utils/formatTime";
import {sendPomodoro} from "./timer/sendPomodoro";
import {TimerInput} from "./timer/TimerInput";
import {PomodoroCircularProgress} from "./PomodoroCircularProgress";
import {PomodoroPropertiesInput} from "./PomodoroPropertiesInput";
import connect from "react-redux/es/connect/connect";

//todo fix bug
//todo split to component and container
//todo rewrite to functional component
//todo plan redux

const renderTimer = (time) => <h3>Timer: {formatTime(time)}</h3>;

class Timer extends React.Component {

	timer;

	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			isOn: false,
			isPaused: false,
			targetTime: 0,
			tag: '',
			description: '',
		};
	}

	handlePomodoroEnd() {
		console.table(this.state);

		const length = this.state.targetTime - this.state.time;

		this.props.actions.sendPomodoro(
			length,
			this.state.tag,
			this.state.description,
		);
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
		this.timer = setInterval(() => {

			this.setState({
				time: this.state.time - 1,
			});

			this.checkIfFinishied();
		}, 50);
	}

	pauseTimer() {
		clearInterval(this.timer);
		this.setState({
			isPaused: true,
		});
	};

	resetTimer() {
		clearInterval(this.timer);
		this.handlePomodoroEnd();
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

	isInputDisabled() {
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
			isDisabled={this.isInputDisabled()}/>;
	}

	renderCircularProgress() {
		return <PomodoroCircularProgress
			progress={this.getProgress()}
		/>;
	}

	handleTagChange(event) {
		this.setState({
			tag: event.target.value,
		});
	}

	handleDescriptionChange(event) {
		this.setState({
			description: event.target.value,
		});
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
					<PomodoroPropertiesInput
						handleChangeTag={event => this.handleTagChange(event)}
						handleChangeDescription={event => this.handleDescriptionChange(event)}
						isDisabled={this.isInputDisabled()}
					/>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			sendPomodoro: sendPomodoro(dispatch),
		},
	};
};


export default connect(undefined, mapDispatchToProps)(Timer);
