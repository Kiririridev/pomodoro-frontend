import ACTION_TYPES from "../actions/actionTypes";


export const startPomodorosFetch = () => {
	return {
		type: ACTION_TYPES.START_POMODOROS_FETCH,
	};
};

export const finishPomodorosFetch = pomodoros => {
	return {
		type: ACTION_TYPES.FINISH_POMODOROS_FETCH,
		pomodoros: pomodoros,
	};
};
