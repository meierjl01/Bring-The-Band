import React from 'react';
import ArtistVote from './artistvote';

export default React.createClass({
  render() {
    console.log(this.props.votedArtists);
    let votes = this.props.votedArtists.map((votedArtist, i, arr) => {
      return <ArtistVote key={i} votedArtist={votedArtist} />;
    });
  return (
    <ul id="voted-list">
      {votes}
    </ul>
  )
}
});
