import React from 'react';
import ArtistVote from './artistvote';

export default React.createClass({
  render() {
    let votes = this.props.votedArtists.map((votedArtist, i, arr) => {
      return <ArtistVote key={votedArtist.id} votedArtist={votedArtist} />;
    });
  return (
    <ul id="voted-list">
      {votes}
    </ul>
  )
}
});
