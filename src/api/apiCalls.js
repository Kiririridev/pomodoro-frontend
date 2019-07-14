import {fetch} from "whatwg-fetch";

const LOCALHOST = "http://localhost:8080";
const GET = "/pomodoroget";
const POST = "/pomodoropost";

export const getPomodorosCall = () => {

	return fetch(LOCALHOST + GET, createGetRequest())
		.then(printStatus)
		.then(extractJSON)
		.then(printJSON)
		.catch(error => console.log(error));
};

export const postPomodoroCall = pomodoro => {

	return fetch(LOCALHOST + POST, createPostRequest(pomodoro))
		.then(printStatus)
		.catch(error => console.log(error))
};

const extractJSON = response => response.json();

const printJSON = json => {
	json.map(item => console.log(item));
	return json;
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
