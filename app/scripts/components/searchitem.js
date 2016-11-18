import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    let artistInfo;
    if(this.props.band.images[0] !== undefined) {
      artistInfo =
          <li>
              <img src={this.props.band.images[0].url} />
              <span>{this.props.band.name}</span>
              <input type="button" value="Vote Now!" onClick={this.handleVote} />
          </li>
    } else {
      artistInfo =
        <li>
          <img src= 'http://www.novelupdates.com/img/noimagefound.jpg' />
          <span>{this.props.band.name}</span>
          <input type="button" value="Vote Now!" onClick={this.handleVote} />
        </li>
    }
    return (
            <div>
              {artistInfo}
            </div>
    )
  }
});
