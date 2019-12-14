export const formatTime = time => {
	const date = new Date(null);

	date.setSeconds(time / 1000);
	return date.toISOString().substr(11, 8);
};
