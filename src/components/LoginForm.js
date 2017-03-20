import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, TextField } from './common';

// Text inputs render with HxW of 0
// this.setState({text: text}) -> this.setState({text})
class LoginForm extends Component {
  state = { email: '', password: '', error: ''};

  onButtonPress() {
    const { email, password } = this.state
    this.setState({error: ''});
    firebase.auth().signInWithEmailAndPassword(email, password)
     .catch(() => {
       firebase.auth().createUserWithEmailAndPassword(email, password)
         .catch(() => {
           this.setState({error: 'Authentication failed'});
         });
     });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextField
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label="Email"
            placeholder="example@gmail.com"
          />
        </CardSection>
        <CardSection>
          <TextField
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label="Password"
            placeholder="password1"
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
