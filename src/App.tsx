import {
	createStyles,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Theme,
	useTheme
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import ToolBar from './components/ToolBar/ToolBar';
import { AppRouter } from './router/AppRouter';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		menuButton: {
			marginRight: theme.spacing(2)
		},
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
		},
		avatar: {
			margin: 10
		},
		link: {
			textDecoration: 'none',
			color: 'inherit'
		}
	})
);

const App: React.FC = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [ open, setOpen ] = useState(false);

	function handleDrawerOpen() {
		setOpen(true);
	}

	function handleDrawerClose() {
		setOpen(false);
	}

	function goTo(text: string): string {
		let path = '';
		switch (text) {
			case 'Estoque':
				path = '/stock';
				break;
			case 'Reserva':
				path = '/booking';
				break;
			case 'Usuários':
				path = '/users';
				break;
			case 'Ocorrências':
				path = '/occurrences';
				break;
			default:
				break;
		}
		return path;
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
					<div className={classes.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
						</IconButton>
					</div>
					<Divider />
					<List>
						<ListItem button>
							<ListItemIcon>
								<Avatar className={classes.avatar}>
									<PersonIcon />
								</Avatar>
							</ListItemIcon>
							<ListItemText primary={'Oi sumido!'} />
						</ListItem>
					</List>
					<Divider />
					<List>
						{[ 'Estoque', 'Reserva', 'Usuários', 'Ocorrências' ].map((text) => (
							<Link to={goTo(text)} className={classes.link} key={text}>
								<ListItem button key={text + '_item'}>
									<ListItemText primary={text} />
								</ListItem>
							</Link>
						))}
					</List>
				</Drawer>
				<main className="App-header">
					<AppRouter />
				</main>
			</Router>
		</div>
	);
};

export default App;
