import ACTION_TYPES from "../actionTypes/actionTypes";
import {INITIAL_STATE} from "../setupStore";


const mainReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ACTION_TYPES.START_POMODOROS_FETCH_GET:
			return {
				...state,
				dataLoading: true,
			};

		case ACTION_TYPES.FINISH_POMODOROS_FETCH_GET:
			return {
				...state,
				dataLoading: false,
				pomodoros: action.pomodoros,
			};

		case ACTION_TYPES.START_POMODOROS__FETCH_POST:
			return {
				...state,
				uploadingPomodoro: true,
			};

		case ACTION_TYPES.FINISH_POMODOROS_FETCH_POST:
			return {
				...state,
				uploadingPomodoro: false,
			};

		case ACTION_TYPES.SELECT_MAIN_SCREEN:
			return {
				...state,
				selectedMainScreen: action.selectedMainScreen,
			};

		default:
			return state;
	}
};

export default mainReducer;