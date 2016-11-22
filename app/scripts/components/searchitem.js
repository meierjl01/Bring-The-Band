import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    let artistInfo;
    if(this.props.band.images[0] !== undefined) {
      artistInfo = <img src={this.props.band.images[0].url} height="150" width="1500"/>;
    } else {
      artistInfo = <img src= 'http://www.novelupdates.com/img/noimagefound.jpg' height="150" width="150"/>
    }
    return (
        <li id="single-search-result">
            {this.props.band.name}
              {artistInfo}
          <button type="submit" id="vote-button">
             Vote<i className="fa fa-music" aria-hidden="true" onClick={this.handleVote}></i>
          </button>
        </li>
    )
  },
  handleVote() {
    console.log('voted');
    store.votes.addVote({name: this.props.band.name, image: this.props.band.images[0].url, id: this.props.band.id});
}
});
