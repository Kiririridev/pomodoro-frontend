import {CircularProgress} from "@material-ui/core";
import * as React from "react";

export const PomodoroCircularProgress = props => {

	const {progress} = props;

	return <CircularProgress
		variant={"static"}
		value={progress}
		thickness={5}
		size={'10rem'}
	/>;
};