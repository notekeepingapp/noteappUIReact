import React, { Component } from 'react';
import isValidCredentials from './APIservice';
import './style.css';
import LoginView from './LoginView';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      invalidCredentials: false,
      errorMessage: '',
    };
  }

    handleUserInput = (e) => {
      const { name } = e.target;
      const { value } = e.target;
      this.setState({
        [name]: value,
      });
    };

    handleSubmit = async (e) => {
      e.preventDefault();
      const isValid = await isValidCredentials(this.state.username, this.state.password);
      if (isValid.status === 200 && isValid.data) {
        this.props.history.push({ pathname: '/home', props: { username: this.state.username } });
      } else if (isValid.status === 200) {
        this.setState({
          invalidCredentials: true,
          errorMessage: 'Username and Password are incorrect',
        });
      } else {
        this.setState({
          invalidCredentials: true,
          errorMessage: 'Failed to authenticate, server error',
        });
      }
    };

    render() {
      return (
        <LoginView
          username={this.state.username}
          password={this.state.password}
          invalidCredentials={this.state.invalidCredentials}
          errorMessage={this.state.errorMessage}
          handleUserInput={this.handleUserInput}
          handleSubmit={this.handleSubmit}
        />
      );
    }
}

export default Index;
