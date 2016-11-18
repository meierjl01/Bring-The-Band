import React from 'react';
import { Link } from 'react-router';
import session from '../store';

export default React.createClass({
    render() {

      let nav;

      if(!window.localStorage.username) {
        nav = (
          <nav>
            <Link to = "login">Log In</Link>
            <Link to = "register">Register</Link>
          </nav>
        )
      } else {
        nav = (
          <nav>
            <Link to = "votes">View Votes</Link>
            <Link to = "search">Search Bands</Link>
            <Link to = "logout">Log Out</Link>
          </nav>
        )
      }
        return (
          <div>
              {nav}
              {this.props.children}
          </div>
      )
    }
});
