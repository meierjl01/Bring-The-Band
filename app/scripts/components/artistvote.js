import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    return (
      <li id="voted-artist">
        <img src = {this.props.votedArtist.image} width="300" height="300"/>
        {this.props.votedArtist.name}
        {this.props.votedArtist.votes} Vote
      </li>
    )
  }
});
