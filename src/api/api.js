import {fetch} from "whatwg-fetch";

const LOCALHOST = "http://localhost:8080";
const GET = "/pomodoroget";

const requestOptions = {
	mode: 'same-origin',
};

export const getPomodoros = () => {
	fetch(LOCALHOST + GET, requestOptions)
		.then(extractJSON)
		.then(printJSON)
		.finally(callFinished)
		.catch(error => console.log(error));
};

const callFinished = () => {
	console.log("CALL FINISHED");
	//this is probably place to dispatch the end of call to store
};

const extractJSON = response => response.json();

const printJSON = json => {
	json.forEach(item => console.log(item));
};
