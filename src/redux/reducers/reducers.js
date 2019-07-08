import ACTION_TYPES from "../actions/actionTypes";
import {INITIAL_STATE} from "../setupStore";


const mainReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ACTION_TYPES.START_POMODOROS_FETCH:
			return {
				...state,
				dataLoading: true,
			};

		case ACTION_TYPES.FINISH_POMODOROS_FETCH:

			return {
				...state,
				dataLoading: false,
				pomodoros: action.pomodoros,
			};

		default:
			return state;
	}
};

export default mainReducer;