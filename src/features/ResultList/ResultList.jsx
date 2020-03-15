import React from "react";
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

export default function ResultList() {
	// functions
	const classes = useStyles();

	return (
		<div>
			<Paper className={classes.resultContainer}>
				<List
					className={classes.list}
					component='div'
					aria-labelledby='list-subheader'
					subheader={<ListSubheader>Results</ListSubheader>}
				>
					<ListItem>A</ListItem>
					<ListItem>B</ListItem>
				</List>
			</Paper>
		</div>
	);
}
