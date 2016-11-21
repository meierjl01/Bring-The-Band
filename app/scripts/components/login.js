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
      <div id="login">
        <form>
          <input id="email" type="email" placeholder="Email"/>
          <input id="password" type="password" placeholder="Password"/>
          <input id="login" type="submit" value="Log In" onClick={this.handleLogin}/>
        </form>
      </div>
    )
  },
  handleLogin(e) {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    store.session.login(email, password);
  }
});
