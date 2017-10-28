import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import {
  emailChanged,
  passwordChanged,
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

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button
        text="Login"
        onPress={this.onButtonPress.bind(this)}
      />
    );
  }

  render() {
    const {
      email,
      password,
      setEmail,
      setPassword
    } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={(() => (setEmail ? email : undefined))()}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={(() => (setPassword ? password : undefined))()}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
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

const mapStateToProps = ({ auth }) => {
  const {
    email, password, setEmail, setPassword, error, loading
  } = auth;

  return {
    email, password, setEmail, setPassword, error, loading
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
