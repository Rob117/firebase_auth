import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
// always import our custom components at the end
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB6sqshitsJQHUii55QKkbnYz0Qk7BX4uA',
      authDomain: 'blaze-dev-97082.firebaseapp.com',
      databaseURL: 'https://blaze-dev-97082.firebaseio.com',
      storageBucket: 'blaze-dev-97082.appspot.com',
      messagingSenderId: '398145369198'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
       return (
         <View style={styles.centerChildren}>
           <Spinner />
         </View>
       );
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <CardSection>
          {this.renderContent()}
        </CardSection>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flexGrow: 1,
    alignSelf: 'center'
  }
}
export default App;
