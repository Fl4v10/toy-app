import Container from '@material-ui/core/Container';
import React from 'react';
import { MaterialRegister } from '../materialRegister/MaterialRegister';
import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Paper, Grid, TextField, Button } from '@material-ui/core';


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

		button: {
			width: '13rem'
		},

		gridPending: {
			paddingTop: theme.spacing(3)
		}

	});

interface IMaterialViewProps extends WithStyles<typeof styles> { }

class MaterialView extends React.Component<IMaterialViewProps> {
	render() {

		const { classes } = this.props;
		return (
			<Container maxWidth="md">
				<Paper className={classes.root}>
					<Grid className={classes.gridPending}>
						<TextField id="name-material" label="Nome" className={classes.textField} margin="normal" />
						<TextField id="quantity-material" label="Quantidade" className={classes.textField} margin="normal" />
					</Grid>
					<Grid className={classes.gridPending}>
						<Button variant="contained" color="primary" className={classes.button}>
							Login
					</Button>
					</Grid>
				</Paper>


				<MaterialRegister />
			</Container>
		);
	}
}


export default withStyles(styles)(MaterialView)