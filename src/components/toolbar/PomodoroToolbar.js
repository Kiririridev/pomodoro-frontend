import * as React from 'react';
import Button from "@material-ui/core/Button/Button";
import {selectMainScreen} from "../../redux/actions/actions";
import {connect} from "react-redux";
import {STATISTICS, TIMER} from "../../consts/mainScreenTypes";


const PomodoroToolbar = (props) => {

	const {selectMainScreen} = props;

	return <div>
		<Button onClick={() => selectMainScreen(TIMER)}>Timer</Button>
		<Button onClick={() => selectMainScreen(STATISTICS)}>Statistics</Button>
	</div>;
};

const mapDispatchToProps = (dispatch) => {
	return {
		selectMainScreen: (mainScreen) => dispatch(selectMainScreen(mainScreen)),
	};
};

export default connect(undefined, mapDispatchToProps)(PomodoroToolbar);


