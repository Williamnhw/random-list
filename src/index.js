import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBpjcIcvwV53njlvJNUN-bi2zQpAWSoT-8",
    authDomain: "random-list-d7e72.firebaseapp.com",
    databaseURL: "https://random-list-d7e72.firebaseio.com",
    projectId: "random-list-d7e72",
    storageBucket: "",
    messagingSenderId: "754150436541"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
