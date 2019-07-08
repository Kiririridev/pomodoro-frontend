import {fetch} from "whatwg-fetch";
import {finishPomodorosFetch, startPomodorosFetch} from "../redux/actionCreators/actionCreators";

const LOCALHOST = "http://localhost:8080";
const GET = "/pomodoroget";
const POST = "/pomodoropost";

export const getPomodoros = (state, dispatch) => () => {

	//todo split actions to update pomodoros and finish get call

	debugger;

	dispatch(startPomodorosFetch);

	console.log("INSIDE GETPOMODOROS");

	const collectPomodorosAndUpdateActionStatus = () => dispatch(finishPomodorosFetch);

	return fetch(LOCALHOST + GET, createGetRequest())
		.then(printStatus)
		.then(extractJSON)
		.then(printJSON)
		.then(collectPomodorosAndUpdateActionStatus)
		.catch(error => console.log(error));

};

export const postPomodoro = pomodoro => {
	return fetch(LOCALHOST + POST, createPostRequest(pomodoro))
		.then(printStatus)
		.catch(error => console.log(error))
		.finally(callFinished);
};


const callFinished = () => {
	console.log("CALL FINISHED");
};

const extractJSON = response => response.json();

// const printJSON = json => {
// 	json.forEach(item => console.log(item));
// 	return json;
// };

const printJSON = json => {
	return json.map(item => console.log(item));
};

const printStatus = response => {
	console.log(response);
	console.log(response.status);

	return response;
};

const createGetRequest = () => {
	return {
		mode: 'same-origin',
	};
};

const createPostRequest = (data) => {
	return {
		method: "POST",
		mode: "same-origin",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(data),
	};
};
