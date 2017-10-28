import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Login from './components/Login';
import Restaurants from './components/Restaurants';
import LoggedIn from './components/LoggedIn';
import PickRestaurant from './components/PickRestaurant';

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: undefined,
			restaurants: [],
			restaurantPicked: undefined
		}
	}

	componentDidMount() {
		const database = firebase.database();
		const reactRef = database.ref().child('react');

		const restaurantRef = reactRef.child('restaurant');
		restaurantRef.on('value', snap => {
			let obj = snap.val();
			let array = Object.keys(obj).reduce((arr,elem)=>{
				arr.push(obj[elem].name)
				return arr;
			},[])
			this.setState({
				restaurants: array
			});
		});

		firebase.auth().onAuthStateChanged(firebaseUser => {
			if (firebaseUser) {
				console.log('logged in');
				this.setState({
					user: firebaseUser
				})
			} else {
				console.log('not logged in');
				this.setState({
					user: undefined
				})
			}
		})
	}

	login = (email, password) => {
		const auth = firebase.auth();
		const promise = auth.signInWithEmailAndPassword(email, password);
		promise.catch(e => console.log(e.message))
	}

	logout = () => {
		firebase.auth().signOut();
	}

	add = (name) => {
		const restaurantRef = firebase.database().ref('react/restaurant');
		restaurantRef.push({
			name
		});
	}

	pick = () => {
		const max = this.state.restaurants.length;
		const index = Math.floor(Math.random() * max);
		this.setState({
			restaurantPicked: this.state.restaurants[index]
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React!!!</h1>
				</header>
				<div className='App-intro'>
					<PickRestaurant restaurant={this.state.restaurantPicked} pick={this.pick}/>
					{this.state.user ? 
						<LoggedIn add={this.add} logout={this.logout} />
					 : 
					 <Login login={this.login}/>
					}
					<Restaurants restaurants={this.state.restaurants} />
				</div>
			</div>
		);
	}
}

export default App;
