import ACTION_TYPES from "../actionTypes/actionTypes";


export const startPomodorosFetchGet = () => {
	return {
		type: ACTION_TYPES.START_POMODOROS_FETCH_GET,
	};
};

export const finishPomodorosFetchGet = pomodoros => {
	return {
		type: ACTION_TYPES.FINISH_POMODOROS_FETCH_GET,
		pomodoros: pomodoros,
	};
};

export const startPomodorosFetchPost = () => {
	return {
		type: ACTION_TYPES.START_POMODOROS__FETCH_POST,
	};
};

export const finishPomodorosFetchPost = () => {
	return {
		type: ACTION_TYPES.FINISH_POMODOROS_FETCH_POST,
	};
};

export const selectMainScreen = (mainScreen) => {
	return {
		type: ACTION_TYPES.SELECT_MAIN_SCREEN,
		selectedMainScreen: mainScreen,
	};
};
