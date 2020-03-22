import React from "react";
import { useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	resultContainer: {
		height: 350
	},
	list: {
		justifyContent: "left",
		maxHeight: 330,
		overflow: "auto",
		border: 0,
		fontSize: 14
	}
});

export default function ResultList({ index }) {
	const settings = useSelector(store => store.controls[index]);
	// functions
	const classes = useStyles();

	const checkVal = () => {
		var value = "False";
		if (settings.resDisplay.checked === true) {
			value = "True";
		} else if (settings.resDisplay.checked === false) {
			value = "False";
		}

		return value;
	};

	return (
		<div>
			<Paper className={classes.resultContainer}>
				<List
					className={classes.list}
					component='div'
					aria-labelledby='list-subheader'
					subheader={<ListSubheader>Results</ListSubheader>}
				>
					{/* {mapResult} */}
					<ListItem>Selected: {settings.resDisplay.Select}</ListItem>
					<ListItem>Text: {settings.resDisplay.Text}</ListItem>
					<ListItem>
						Checkbox: {JSON.stringify(settings.resDisplay.Checkbox)}
					</ListItem>
					<ListItem>Slider: {settings.resDisplay.Slider}</ListItem>
				</List>
			</Paper>
		</div>
	);
}
