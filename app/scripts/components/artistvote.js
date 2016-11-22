import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    // console.log(this.props.votedArtist);
    return (
      <li id="voted-artist">
        <img src = {this.props.votedArtist.image} width="200" height="200"/>
        <div>{this.props.votedArtist.name}</div>
        <div>Artist Votes: {this.props.votedArtist.votes}</div>
      </li>
    )
  }
});
