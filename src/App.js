import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA-F5ek-jLSjTC1xaoakAeizFZwykhuP7o',
      authDomain: 'authentication-4e408.firebaseapp.com',
      databaseURL: 'https://authentication-4e408.firebaseio.com',
      projectId: 'authentication-4e408',
      storageBucket: 'authentication-4e408.appspot.com',
      messagingSenderId: '98949813707'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
