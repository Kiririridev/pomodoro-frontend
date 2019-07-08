import {combineReducers, createStore, applyMiddleware} from "redux";
import reducer from "./reducers/reducers";
import thunk from "redux-thunk";

// const reducers = combineReducers({reducer});
//

const initialState = {
	dataLoading: false,
	pomodoros: [],
};

const reducers = combineReducers({
	reducer,
});


const setupStore = () => {
	const store = createStore(
		reducers,
		applyMiddleware(thunk));

	return store;
};

export default setupStore;
