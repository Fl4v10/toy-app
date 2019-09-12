import { Avatar, createStyles, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Theme, WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PersonIcon from '@material-ui/icons/Person';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) =>
	createStyles({
		avatar: {
			margin: 10
		},
		link: {
			textDecoration: 'none',
			color: 'inherit'
		},
		drawerHeader: {
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(0, 1),
			...theme.mixins.toolbar,
			justifyContent: 'flex-end'
		}
	});

interface IDrawerListProps extends WithStyles<typeof styles> {
	handlerClick: () => void;
}

class DrawerList extends Component<IDrawerListProps> {

	render() {
		const { classes } = this.props;

		return (
			<>
				<div className={classes.drawerHeader}>
					<IconButton onClick={this.props.handlerClick}>
						<ChevronLeftIcon />
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
					{['Inventário', 'Reserva', 'Usuários', 'Ocorrências'].map((text) => (
						<Link to={this.generatePaths(text)} className={classes.link} key={text}
							onClick={this.props.handlerClick}
							onKeyDown={this.props.handlerClick}
						>
							<ListItem button key={text + '_item'}>
								<ListItemText primary={text} />
							</ListItem>
						</Link>
					))}
				</List>
			</>);
	}

	private generatePaths(text: string): string {
		let path = '';
		switch (text) {
			case 'Inventário':
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
}

export default withStyles(styles)(DrawerList);