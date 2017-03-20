import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, TextField, Spinner } from './common';

// Text inputs render with HxW of 0
// this.setState({text: text}) -> this.setState({text})
class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false};

  onButtonPress() {
    const { email, password } = this.state
    this.setState({error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
     .then(this.onLoginSuccess.bind(this))
     .catch(() => {
       firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(this.onLoginSuccess.bind(this))
         .catch(this.onLoginFail.bind(this));
     });
  }

  onLoginSuccess() {
    this.setState({
      error: '',
      loading: false,
      email: '',
      password: ''})
  }

  onLoginFail() {
    this.setState({error: 'Authentication failed', loading: false});
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small"/>
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
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
          {this.renderButton()}
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
