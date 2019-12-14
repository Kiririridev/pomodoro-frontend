import React from "react";


export const Background = props => {

	const CSS_ID = "background";

	return <div id={CSS_ID}>
		{props.children}
	</div>;
};