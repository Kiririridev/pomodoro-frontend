import * as React from 'react';
import {TimerButtonPad} from "./table/TimerButtonPad";
import {CircularProgress} from '@material-ui/core';
import {InputBase, TextField, FormControl} from '@material-ui/core';
import {formatTime} from "./utils/formatTime";
import * as moment from 'moment';

//todo fix bug
//todo split to component and container
//todo rewrite to functional component
//todo plan redux

const renderTimer = (time) => <h3>Timer: {formatTime(time)}</h3>;

const renderTimerInput = (onChange, isDisabled) => {

	const preventDefault = (event) => event.preventDefault();

	return <TextField
		label="Minutes"
		type="time"
		InputLabelProps={{
			shrink: true,
			margin: 'none',
		}}
		InputProps={{
			step: 1000,
			type: 'number',
			min: 0,
			max: 100,
		}}
		margin={'dense'}
		size={'medium'}
		variant={"standard"}
		name={'time'}
		onChange={onChange}
		onSubmit={preventDefault}
		disabled={isDisabled}
		min={0}
		max={100}
	/>;
};

export default class Timer extends React.Component {

	timer;

	// startTimer() {
	// 	this.setState({
	// 		isOn: true,
	// 		time: this.state.time,
	// 		start: Date.now() - this.state.time,
	// 	});
	// 	this.timer = setInterval(() => this.setState({
	// 		// time: Date.now() - this.state.start,
	// 		time: this.state.time + 1000,
	// 	}), 1000);
	// };

	startTimer() {

		console.log(this.state.targetTime);

		if (!!this.state.targetTime) {
			this.setState({
				isOn: true,
				time: this.state.time,
				start: Date.now() - this.state.time,
			});
			this.timer = setInterval(() => this.setState({
				// time: Date.now() - this.state.start,
				time: this.state.time + 1000,
			}), 1000);
		} else {
			console.log('please set time');
		}
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
			targetTime: 0,
		};
	}

	handleTimeUpdate(event) {
		const targetTime = moment.duration(event.target.value).asSeconds();

		this.setState(
			{targetTime: targetTime});
		console.log(targetTime);
		console.log(event.target.value);
		console.table(this.state);
	}

	render() {
		return (
			<div className={'timer-pad'}>
				<div className={'timer-pad-row'}>
					<CircularProgress
						variant={"static"}
						value={50}
						thickness={5}
						size={'10rem'}
					/>
				</div>
				<div className={'timer-pad-row'}>
					{renderTimer(this.state.time)}
				</div>
				<div className={'timer-pad-row'}>
					{renderTimerInput(
						(event) => this.handleTimeUpdate(event),
						this.state.isOn)}
				</div>
				<div className={'timer-pad-row'}>
					<TimerButtonPad
						startTimer={() => this.startTimer()}
						pauseTimer={() => this.pauseTimer()}
						resetTimer={() => this.resetTimer()}
						isOn={this.state.isOn}
						time={this.state.time}/>
				</div>
			</div>
		);
	}
}



