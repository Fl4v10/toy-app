import Container from '@material-ui/core/Container';
import React, { Component } from 'react';
import { MaterialRegister } from '../materialRegister/MaterialRegister';
import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Paper, Grid, TextField, RadioGroup, Radio, MenuItem, Select, InputLabel, Typography, FormControlLabel } from '@material-ui/core';
import { width } from '@material-ui/system';


const styles = (theme: Theme) =>
	createStyles({
		textFieldNome: {
			marginLeft: theme.spacing(3),
			marginRight: theme.spacing(3),
			width: 300
		},
		textFieldQuantidade: {
			// marginLeft: theme.spacing(10),
			// marginRight: theme.spacing(10),
			width: 90
		},

		root: {
			padding: theme.spacing(3, 2)
		},

		button: {
			width: '13rem'
		},

		gridPending: {
			paddingTop: theme.spacing()
		},

		selectDisciplina: {

			width: 300
		}
	});

interface IMaterialViewProps extends WithStyles<typeof styles> { }

interface IMaterialViewState {
	subject: string
	type: string
}

class MaterialView extends Component<IMaterialViewProps, IMaterialViewState> {

	constructor(props: IMaterialViewProps) {
		super(props);
		this.state = {
			subject: '',
			type: 'nao consumivel'
		} as IMaterialViewState;
	}

	// handleChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
	// 	setValues((oldValues: any) => ({
	// 		...oldValues,
	// 		[event.target.name as string]: event.target.value,
	// 	}));
	// }

	handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
		const subject = event.target.value as string;
		this.setState({ subject });
	}

	handleTypeChange = (event: React.ChangeEvent<{}>, value: string) => {
		const type = (event.target as HTMLInputElement).value;
		this.setState({ type });
	}

	render() {
		const { classes } = this.props;

		return (
			<Container maxWidth="md">
				<Paper className={classes.root}>
					<Typography variant="h5">Inventário de Material</Typography>
					<Grid className={classes.gridPending}>
						<TextField id="name-material" label="Nome"
							onChange={this.handleChange}
							className={classes.textFieldNome} margin="normal" />
					</Grid>
					<Grid className={classes.gridPending}>
						<Select id="subject-material"
							placeholder="Disciplina"
							onChange={this.handleChange}
							value={this.state.subject}
							className={classes.selectDisciplina}>
							<MenuItem id="portugues-subject-material" value="Portugues">Língua Portuguesa</MenuItem>
							<MenuItem id="matematica-subject-material" value="Matematica">Matemática</MenuItem>
							<MenuItem id="ciencias-subject-material" value="Ciencias">Natureza e Sociedade</MenuItem>
							<MenuItem id="edfisica-subject-material" value="Natureza">Educação Física</MenuItem>
							<MenuItem id="edespecial-subject-material" value="Cuzão">Educação Especial</MenuItem>
							<MenuItem id="cognitivo-subject-material" value="Natureza">Desenvolvimento Cognitivo</MenuItem>
						</Select>
					</Grid>

					<TextField id="quantity-material" label="Quantidade" className={classes.textFieldQuantidade} margin="normal" />

					<Grid
						className={classes.gridPending}
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<RadioGroup aria-label="position" name="position"
							value={this.state.type}
							onChange={this.handleTypeChange}
							row>
							<FormControlLabel
								value="nao consumivel"
								control={<Radio color="primary" />}
								label="Não Consumível"
								labelPlacement="end"
							/>
							<FormControlLabel
								value="end"
								control={<Radio color="primary" />}
								label="Consumível"
							/>
						</RadioGroup>
					</Grid>
				</Paper>

				<MaterialRegister />
			</Container>
		);
	}
}


export default withStyles(styles)(MaterialView)