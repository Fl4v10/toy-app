import { createStyles, Drawer, makeStyles, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ToolBar from './components/ToolBar/ToolBar';
import { AppRouter } from './router/AppRouter';
import DrawerList from './components/drawerList/DrawerList';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawer: {
			width: drawerWidth,
			flexShrink: 0
		},
		drawerPaper: {
			width: drawerWidth
		},
		drawerHeader: {
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(0, 1),
			...theme.mixins.toolbar,
			justifyContent: 'flex-end'
		}
	})
);

const App: React.FC = () => {
	const classes = useStyles();
	const [ open, setOpen ] = useState(false);

	function handleDrawerOpen() {
		setOpen(true);
	}

	function handleDrawerClose() {
		setOpen(false);
	}

	return (
		<div className="App">
			<Router>
				<ToolBar onClick={handleDrawerOpen} />
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<DrawerList handlerClick={handleDrawerClose} />
				</Drawer>
				<main className="App-header" onClick={handleDrawerClose}>
					<AppRouter />
				</main>
			</Router>
		</div>
	);
};

export default App;
