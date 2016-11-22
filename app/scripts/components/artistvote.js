import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    // console.log(this.props.votedArtist);
    return (
      <li id="voted-artist">
        <div>{this.props.votedArtist.name}</div>
        <img src = {this.props.votedArtist.image} width="150" height="150"/>
        <div>Artist Votes: {this.props.votedArtist.votes}</div>
      </li>
    )
  }
});
