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
        <input ref="email" id="email" type="email" placeholder="Email" />
        <input ref="password" id="password" type="password" placeholder="Password" />
        <input ref="confirmPw" id="confirm-pw" type="password" placeholder="Confirm Password" />
        <input id="register" type="submit" value="Register Now" onClick={this.handleRegister} />
      </form>
    )
  },
  handleRegister(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const confirmPw = this.refs.confirmPw.value;
    if(store.session.validatePassword(password, confirmPw)) {
      store.session.register(email, password, confirmPw);
    } else {
      alert('Passwords do not match');
    }
  }
});
