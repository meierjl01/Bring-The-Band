import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    return (
      <li id="voted-artist">
        {this.props.votedArtist.name}
      </li>
    )
  }
});
