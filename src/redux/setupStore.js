import {combineReducers, createStore, applyMiddleware} from "redux";
import mainReducer from "./reducers/reducers";
import thunk from "redux-thunk";


export const INITIAL_STATE = {
	dataLoading: false,
	pomodoros: [],
};

const reducers = combineReducers({
	main: mainReducer,
});


const setupStore = () => {
	const store = createStore(
		reducers,
		applyMiddleware(thunk));

	return store;
};

export default setupStore;
