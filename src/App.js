import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			curentUser: null,
		};
	}

  unsuscribeFromAuth = null;

	componentDidMount() {
	    this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ curentUser: user });
			console.log(user);
		});
	}

  componentWillUnmount() {
    this.unsuscribeFromAuth()
  }

	render() {
		return (
			<div>
				<Header currentUser={this.state.curentUser}/>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
