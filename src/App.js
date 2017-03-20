import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
// always import our custom components at the end
import { Header } from './components/common';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB6sqshitsJQHUii55QKkbnYz0Qk7BX4uA',
      authDomain: 'blaze-dev-97082.firebaseapp.com',
      databaseURL: 'https://blaze-dev-97082.firebaseio.com',
      storageBucket: 'blaze-dev-97082.appspot.com',
      messagingSenderId: '398145369198'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
