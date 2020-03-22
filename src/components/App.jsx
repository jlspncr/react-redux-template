import React from "react";
import logo from "./../assets/images/logo.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";

import ControlPanel from "../features/ControlPanel/ControlPanel.jsx";
import ResultList from "../features/ResultList/ResultList.jsx";

import "./../assets/stylesheets/App.css";

const App = () => {
	return (
		<div className='App'>
			<div>
				<AppBar id='titleBar'>
					<Toolbar>
						{/* <IconButton
							edge='start'
							// className={classes.menuButton}
							color='inherit'
							aria-label='menu'
						>
							<MenuIcon />
						</IconButton> */}
						<Typography variant='h6'>
							Welcome To The React-Redux Template
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
			<Grid container spacing={1} className='controlled'>
				{/* Control Input Samples */}
				<Grid item xs={6}>
					<ControlPanel index={0} />
				</Grid>
				<Grid item xs={6}>
					<ResultList index={0} />
				</Grid>

				{/* Result List Sample */}
			</Grid>
		</div>
	);
};

export default App;
