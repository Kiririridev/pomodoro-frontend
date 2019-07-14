import React from "react";


export const Background = props => {

	const CSS_ID = "background";

	console.log(props);

	return <div id={CSS_ID}>
		{props.children}
	</div>;
};