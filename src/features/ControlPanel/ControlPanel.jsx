import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Textfield from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

import {
	setText,
	toggleSelected,
	setSlider,
	pubClick
} from "../ControlPanel/ControlPanelSlice";

import Select from "../../components/Select/Select";

import "../../assets/stylesheets/ControlPanel.css";

export default function ControlPanel({ index }) {
	const settings = useSelector(store => store.controls[index]);
	const dispatch = useDispatch();
	const [cBox, setChecked] = React.useState(false);
	const [tBox, setString] = React.useState(settings);
	const [slider, setNum] = React.useState(settings);

	//#region ----- HANDLERS -----
	const toggleCheck = event => {
		setChecked(event.target.checked);
		dispatch(toggleSelected({ index: index, selected: event.target.checked }));
	};

	const textChange = event => {
		setString(event.target.value);
		dispatch(setText({ index: index, newText: event.target.value }));
	};

	const slideChange = (event, newValue) => {
		setNum(newValue);
		dispatch(setSlider({ index: index, selected: newValue }));
	};

	const uploadClicked = event => {
		dispatch(pubClick({ index: index }));
	};
	//#endregion

	function slidevalue(value) {
		return `${value}ms`;
	}

	return (
		<div className='cPanel'>
			<Paper>
				{/* Select */}
				<Select
					id='inputOne'
					options={settings.option}
					title='Select'
					label='Select'
					value={settings.optVal}
					index={0}
				/>
				{/* Text Field */}
				<form id='inputTwo'>
					<Textfield label='Text Input' onChange={textChange} />
				</form>
				{/* Checkbox */}
				<FormControlLabel
					id='inputThree'
					control={<Checkbox checked={cBox} onChange={toggleCheck} />}
					label='Checkbox'
				/>
				{/* Slider */}
				<div id='inputFour'>
					<Typography>Slider</Typography>
					<Slider
						id='slideBar'
						onChange={slideChange}
						defaultValue={1}
						getAriaValueText={slidevalue}
						aria-labelledby='speedSlider'
						valueLabelDisplay='auto'
						step={1}
						min={1}
						max={5}
					/>
				</div>

				{/* Simple Publish Button */}
				<div>
					<Button id='inputFive' variant='contained' onClick={uploadClicked}>
						Publish
					</Button>
				</div>
			</Paper>
		</div>
	);
}
