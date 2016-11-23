import React from 'react';
import { Link } from 'react-router';
import store from '../store';
import Home from './home';

export default React.createClass({
    getInitialState() {
      return { ['user-token']: store.session.get['user-token']}
    },
    componentDidMount() {
      store.session.on('change', () => {
        this.setState({['user-token']: store.session.get['user-token']});
      })
    },
    render() {

      let nav;

      if(!window.localStorage['user-token']) {
        nav = (
          <nav id="first-nav">
            <Link to = "login">Log In</Link>
            <Link to = "register">Register</Link>
          </nav>
        )
      } else {
        nav = (
          <nav>
            <Link to = "votes">View Votes</Link>
            <Link to = "search">Search Bands</Link>
            <input id="logout" type="submit" value="Log Out" onClick={this.handleLogout}/>
          </nav>
        )
      }
        return (
          <div id="nav-container">
            <h1>Bring the Band</h1>
              {nav}
              <Home/>
              {this.props.children}
          </div>
      )
    },
    handleLogout(e) {
      e.preventDefault();
      store.session.logout();
    }
});
