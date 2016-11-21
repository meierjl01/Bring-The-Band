import React from 'react';
import store from '../store';
import VotesList from './voteslist';

export default React.createClass({
  getInitialState() {
    return {
      session: store.session.toJSON(),
      votes: store.votes.toJSON(),
    }
  },
  componentWillMount() {
    store.votes.fetch();
  },
  componentDidMount() {
    store.session.on('change update', () => {
      this.setState({votes: store.votes.toJSON()})
    });
  },
  render() {
    return (
      <div id="votes-container">
        <h2>Votes:</h2>
        <VotesList votedArtists={this.state.votes} />
      </div>
    )
  }
});
