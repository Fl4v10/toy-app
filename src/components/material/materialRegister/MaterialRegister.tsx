import Container from '@material-ui/core/Container';
import React from 'react';
import logo from './../../../logo.svg';
import { borderRadius, bgcolor } from '@material-ui/system';

export class MaterialRegister extends React.Component {
	render() {
		return (
			<Container maxWidth="md">
				{/* {<img src={logo} className="App-logo" alt="logo" />} */}
				<p>Pau no cú do mundo!</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Eu sou o componente que vai cadastrar o material!
				</a>
			</Container>
		);
	}
}
