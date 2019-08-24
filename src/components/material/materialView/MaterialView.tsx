import Container from '@material-ui/core/Container';
import React from 'react';
import { MaterialRegister } from '../materialRegister/MaterialRegister';

export class MaterialView extends React.Component {
	render() {
		return (
			<Container maxWidth="md">
				<p>Eu sou a tela de material!</p>
				<MaterialRegister />
			</Container>
		);
	}
}
