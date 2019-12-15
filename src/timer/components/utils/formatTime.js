export const formatTime = time => {
	const date = new Date(null);

	date.setSeconds(time);
	return date.toISOString().substr(11, 8);
};
