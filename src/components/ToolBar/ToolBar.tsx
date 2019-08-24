import React, { Component } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		},
		menuButton: {
			marginRight: theme.spacing(2)
		},
		title: {
			flexGrow: 1
		},
		avatar: {
			margin: 10
		},
		link: {
			textDecoration: 'none',
			color: 'inherit'
		}
	});

export interface IToolBarProps extends WithStyles<typeof styles> {
	onClick: () => void;
}

class ToolBar extends Component<IToolBarProps> {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar style={{ backgroundColor: '#282c34' }}>
						<IconButton
							onClick={(_) => this.props.onClick()}
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Laboratório de Práticas Pedagógicas
						</Typography>
						<Avatar className={classes.avatar}>
							<PersonIcon />
						</Avatar>
						<Button color="inherit">
							<Link to="/login" className={classes.link}>
								Login
							</Link>
						</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(ToolBar);
