import Container from '@material-ui/core/Container';
import React from 'react';
import { Paper, Typography, Grid, Button, TextField } from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) =>
	createStyles({
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: 200
		},
		root: {
			padding: theme.spacing(3, 2)
		},
		grid: {
			padding: theme.spacing(1)
		},
		links: {
			textDecoration: 'none'
		},
		button: {
			width: '13rem'
		},
		typography: {
			textDecoration: 'none'
		}
	});

interface ILoginPageProps extends WithStyles<typeof styles> { }

class LoginPage extends React.Component<ILoginPageProps> {
	render() {
		const { classes } = this.props;
		return (
			<Container maxWidth="xs">
				<Paper className={classes.root}>
					<Grid>
						<TextField id="name" label="Nome" className={classes.textField} margin="normal" />
					</Grid>
					<Grid>
						<TextField
							id="password"
							label="Senha"
							className={classes.textField}
							margin="normal"
							type="password"
						/>
					</Grid>
					<Grid className={classes.root}>
						<Button variant="contained" color="primary" className={classes.button}>
							Login
						</Button>
					</Grid>
					<Grid className={classes.grid} container direction="row" justify="space-evenly" alignItems="center">
						<Link to="/booking" className={classes.links}>
							<Typography variant="subtitle1" color="primary" style={{ fontSize: '0.9rem' }}>
								Cadastrar
							</Typography>
						</Link>
						<Link to="/booking" className={classes.links}>
							<Typography variant="subtitle1" color="primary" style={{ fontSize: '0.9rem' }}>
								Recuperar Senha
							</Typography>
						</Link>
					</Grid>
				</Paper>
			</Container>
		);
	}
}

export default withStyles(styles)(LoginPage);
