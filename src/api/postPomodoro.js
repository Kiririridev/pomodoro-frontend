import {postPomodoroCall} from "./apiCalls";

export const postPomodoro = dispatch => pomodoro => {

	dispatch();

	postPomodoroCall(pomodoro)
		.then(callFinished);
};
