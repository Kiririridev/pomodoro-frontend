import moment from "moment";
import {postPomodoro} from "../../../api/postPomodoro";

const getLengthInMinutes = (lengthInSeconds) => {

	return Math.floor(lengthInSeconds / 60);
};

const createNewPomodoro = (user, length, tag, description) => {

	const date = moment(new Date()).format('YYYY-MM-DD');

	return {
		userId: user,
		pomodoroDate: date,
		length: length,
		tag: tag,
		description: description,
	};
};

export const sendPomodoro = (dispatch) => (lengthInSeconds, tag, description) => {

	const lengthInMinutes = getLengthInMinutes(lengthInSeconds);
	const pomodoro = createNewPomodoro("kiri", lengthInMinutes, tag, description);
	console.log('send Pomodoro');
	console.table(pomodoro);
	postPomodoro(pomodoro, dispatch);
};

