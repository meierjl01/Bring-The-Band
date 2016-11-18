import React from 'react';
import store from '../store';

export default React.createClass({
  getInitialState() {
    return {
      session: store.session.toJSON()
    }
  },
  componentDidMount() {
    store.session.on('change', () => {
      this.setState({session: store.session.toJSON()})
    });
  },
  render() {
    return (
      <form id="register">
        <input id="email" type="email" placeholder="Email" />
        <input id="username" type="text" placeholder="Username"/>
        <input id="password" type="password" placeholder="Password" />
        <input id="confirm-pw" type="password" placeholder="Confirm Password" />
        <input id="register" type="submit" value="Register Now" onClick={this.handleRegister} />
      </form>
    )
  },
  handleRegister(e) {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const confirmPw = document.querySelector('#confirm-pw').value;
    if(store.session.validatePassword(password, confirmPw)) {
      store.session.register(email, username, password, confirmPw);
    } else {
      alert('Passwords do not match');
    }
  }
});
