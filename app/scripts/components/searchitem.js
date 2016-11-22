import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    let artistInfo;
    if(this.props.band.images[0] !== undefined) {
      artistInfo =
          <li id="single-search-result">
              <img src={this.props.band.images[0].url} />
              <span>{this.props.band.name}</span>
              <button type="submit" id="vote-button">
                 Vote<i className="fa fa-music" aria-hidden="true" onClick={this.handleVote}></i>
              </button>
          </li>
    } else {
      artistInfo =
        <li id="single-search-result">
          <img src= 'http://www.novelupdates.com/img/noimagefound.jpg' />
          <div id="band-name">{this.props.band.name}</div>
          <button type="submit" id="vote-button">
             Vote<i className="fa fa-music" aria-hidden="true" onClick={this.handleVote}></i>
          </button>
        </li>
    }
    return (
            <div>
              {artistInfo}
            </div>
    )
  },
  handleVote() {
    console.log('voted');
    store.votes.addVote({name: this.props.band.name, image: this.props.band.images[0].url, id: this.props.band.id});
}
});
