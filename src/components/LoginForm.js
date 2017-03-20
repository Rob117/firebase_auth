import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

// Text inputs render with HxW of 0
class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput style={{height: 20, width: 100}}/>
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
