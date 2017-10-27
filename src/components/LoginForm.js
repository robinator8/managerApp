import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import {
  emailChanged,
  passwordChanged,
  resetEmail,
  resetPassword,
  loginUser,
} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  resetEmailAndPassword() {
    //this.props.resetEmail('');
    this.props.resetPassword('');
  }

  render() {
    const {
      email,
      password,
      resettingEmail,
      resettingPassword
    } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={(() => (resettingEmail ? email : undefined))()}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={(() => (resettingPassword ? password : undefined))()}
          />
        </CardSection>
        <CardSection>
          <Button
            text="Login"
            onPress={this.onButtonPress.bind(this)}
          />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {
    email, password, resettingEmail, resettingPassword
  } = state.auth;

  return {
    email, password, resettingEmail, resettingPassword
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  resetEmail,
  resetPassword,
  loginUser
})(LoginForm);
