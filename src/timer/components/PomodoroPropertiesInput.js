import React from "react";
import {TextField} from '@material-ui/core';

export const PomodoroPropertiesInput = props => {

	const {handleChangeTag, handleChangeDescription, isDisabled} = props;
	const toUpperCase = (event) => {
		event.target.value = event.target.value.toUpperCase();
	};

	const handleChangeTagCombined = event => {
		toUpperCase(event);
		handleChangeTag(event);
	};

	return <div className={'timer-properties-input'}>
		<TextField
			onChange={handleChangeTagCombined}
			className={'properties-text-field tag-properties-input'}
			label={'Tag'}
			variant={"outlined"}
			disabled={isDisabled}
		/>
		<TextField
			onChange={handleChangeDescription}
			className={'properties-text-field description-properties-input'}
			label={"Description"}
			multiline={true}
			rows={3}
			variant={"outlined"}
			disabled={isDisabled}
		/>
	</div>;
};
