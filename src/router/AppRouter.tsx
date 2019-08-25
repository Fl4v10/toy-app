import React, { Component } from 'react';
import { Route } from 'react-router';
import { BookingView } from '../components/booking/BookingView';
import { MaterialRegister } from '../components/material/materialRegister/MaterialRegister';
import { MaterialView } from '../components/material/materialView/MaterialView';
import { OccurrenceView } from '../components/occurrence/OccurrenceView';
import { UserRegister } from '../components/user/UserRegister';
import { UserView } from '../components/user/UserView';
import LoginPage from '../components/auth/LoginPage';

export class AppRouter extends Component {
	render() {
		return (
			<>
				<Route exact path="/" component={BookingView} />
				<Route path="/material/register" component={MaterialRegister} />
				<Route path="/user/register" component={UserRegister} />
				<Route path="/login" component={LoginPage} />
				<Route path="/stock" component={MaterialView} />
				<Route path="/booking" component={BookingView} />
				<Route path="/users" component={UserView} />
				<Route path="/occurrences" component={OccurrenceView} />
			</>
		);
	}
}
