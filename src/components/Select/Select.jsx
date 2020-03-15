import {
	FormControl,
	InputLabel,
	MenuItem,
	Select as SelectMaterial,
	Menu
} from "@material-ui/core";

import React from "react";
import { useDispatch } from "react-redux";
import { setOption } from "../../features/ControlPanel/ControlPanelSlice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	drop: {
		width: 200,
		marginBottom: 20,
		marginTop: 20
	}
});

const Select = ({ label, options, value }) => {
	const dispatch = useDispatch();
	const classes = useStyles();

	// Hooks
	const [selected, setSelected] = React.useState(value);

	const handleChange = event => {
		setSelected(event.target.value);
		console.log(event.target.value);
		dispatch(setOption({ newOpt: event.target.value }));
	};

	return (
		<FormControl className={classes.drop}>
			<InputLabel id='dropdown'>{label}</InputLabel>
			<SelectMaterial
				labelId='dropdown'
				onChange={handleChange}
				value={selected}
			>
				{options.map((attribute, i) => (
					<MenuItem key={i} value={attribute}>
						{attribute}
					</MenuItem>
				))}
			</SelectMaterial>
		</FormControl>
	);
};

export default Select;
