import React from 'react';
import store from '../store';
import VotesList from './voteslist';

export default React.createClass({
  getInitialState() {
    return {
      voted: store.votes.toJSON()
    }
  },
  componentWillMount() {
    store.votes.fetch();
  },
  componentDidMount() {
    store.votes.fetch();
    store.votes.on('change update', this.updateStatus);
  },
  componentWillUnmount() {
    store.votes.off('update change', this.updateStatus);
  },
  render() {
    return (
      <div id="votes-container">
        <h2>Votes:</h2>
        <VotesList votedArtists={this.state.voted} />
      </div>
    )
  },
  updateStatus() {
    this.setState({voted: store.votes.toJSON()})
  }
});
