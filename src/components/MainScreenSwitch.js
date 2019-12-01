import * as React from 'react';
import {connect} from "react-redux";
import Timer from "../timer/components/Timer";
import PomodoroTable from "../timer/components/table/PomodoroTable";
import {STATISTICS, TIMER} from "../consts/mainScreenTypes";
import {selectSelectedMainScreen} from "../redux/storeSelectors/storeSelectors";

const MainChartSwitch = (props) => {

	const {selectedMainScreen} = props;

	switch (selectedMainScreen) {
		case STATISTICS:
			return <PomodoroTable/>;
		case TIMER:
		default:
			return <Timer/>;
	}
};

const mapStateToProps = (state) => {
	return {
		selectedMainScreen: selectSelectedMainScreen(state),
	};
};

export default connect(mapStateToProps, undefined)(MainChartSwitch);