import React from "react";
import logo from "./../assets/images/logo.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import ControlPanel from "../features/ControlPanel/ControlPanel.jsx";
import ResultList from "../features/ResultList/ResultList.jsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "./../assets/stylesheets/App.css";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2)
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerInfo: {
		margin: 12
	}
}));

const App = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className='App'>
			<div>
				<AppBar id='titleBar'>
					<Toolbar>
						<IconButton
							edge='start'
							className={classes.menuButton}
							onClick={handleDrawerOpen}
							color='inherit'
							aria-label='menu'
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6'>
							Welcome To The React-Redux Template
						</Typography>
					</Toolbar>
				</AppBar>

				<Drawer
					className={classes.drawer}
					variant='persistent'
					anchor='left'
					open={open}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === "ltr" ? (
								<ChevronLeftIcon />
							) : (
								<ChevronRightIcon />
							)}
						</IconButton>
					</div>

					<p className={classes.drawerInfo}>
						This is a drawer. Feel free to add what you would like.
					</p>
				</Drawer>
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
