import {finishPomodorosFetchGet, startPomodorosFetchGet} from "../redux/actions/actions";
import {getPomodorosCall} from "./apiCalls";

export const getPomodoros = (dispatch) => {

	dispatch(startPomodorosFetchGet);

	const collectPomodorosAndUpdateActionStatus = pomodoros => dispatch(finishPomodorosFetchGet(pomodoros));

	getPomodorosCall()
		.then(collectPomodorosAndUpdateActionStatus)
		.catch(error => console.log(error));
};