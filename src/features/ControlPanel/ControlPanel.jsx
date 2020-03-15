import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Textfield from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

import { setText, toggleSelected } from "../ControlPanel/ControlPanelSlice";

import Select from "../../components/Select/Select";

import "../../assets/stylesheets/ControlPanel.css";

export default function ControlPanel() {
	const [cBox, setChecked] = React.useState(false);
	const settings = useSelector(state => state.control);
	const dispatch = useDispatch();

	//#region ----- HANDLERS -----
	const toggleCheck = event => {
		setChecked(event.target.checked);
	};

	const textChange = event => {
		dispatch(setText({ newText: event.target.value }));
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
					options={["Option #1", "Option #2"]}
					title='Select'
					label='Select'
					// index={0}
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
						defaultValue={1}
						getAriaValueText={slidevalue}
						aria-labelledby='speedSlider'
						valueLabelDisplay='auto'
						step={1}
						min={1}
						max={5}
					/>
				</div>

				{/* Publish Button */}
				<div>
					<Button id='inputFive' variant='contained'>
						Publish
					</Button>
				</div>
			</Paper>
		</div>
	);
}
