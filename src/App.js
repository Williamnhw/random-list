import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Login from './Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      speed: 10,
      user: undefined
    }
  }

  componentDidMount() {
    const database = firebase.database();
    const reactRef = database.ref().child('react');
    const speedRef = reactRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      })
    console.log(snap.val())
    })
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
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

  login = (event) => {
    event.preventDefault();
    const {email, password} = event.target;
    console.log(email.value);
    console.log(password.value);

    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => console.log(e.message))
  }

  logout = () => {
    firebase.auth().signOut();
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React, Hello World!!!</h1>
        </header>
        <div className='App-intro'>
          <p>{this.state.speed}</p>
          {this.state.user ? 
            <button id='logoutBtn' onClick={this.logout}>Logout</button>
           : 
           <Login login={this.login}/> 
          }
        </div>
      </div>
    );
  }
}

export default App;
