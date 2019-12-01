import * as React from 'react';
import {TimerButtonPad} from "./table/TimerButtonPad";

//todo fix bug
//todo split to component and container
//todo rewrite to functional component
//todo plan redux

const formatTime = time => Math.round(time / 1000);


const renderTimer = (time) => <h3>Timer: {formatTime(time)}</h3>;

export default class Timer extends React.Component {

	timer;

	startTimer() {
		this.setState({
			isOn: true,
			time: this.state.time,
			start: Date.now() - this.state.time,
		});
		this.timer = setInterval(() => this.setState({
			// time: Date.now() - this.state.start,
			time: this.state.time + 1000,
		}), 1000);
	};

	pauseTimer() {
		clearInterval(this.timer);
		this.setState({
			isOn: false,
		});
	};

	resetTimer() {
		clearInterval(this.timer);
		this.setState({
			time: 0,
			isOn: false,
		});
	};

	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			isOn: false,
			start: 0,
		};
	}

	render() {
		return (
			<>
				{renderTimer(this.state.time)}
				<TimerButtonPad
					startTimer={() => this.startTimer()}
					pauseTimer={() => this.pauseTimer()}
					resetTimer={() => this.resetTimer()}
					isOn={this.state.isOn}
					time={this.state.time}
				/>
			</>
		);
	}
}



