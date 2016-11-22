import React from 'react';
import SearchItem from './searchitem';

export default React.createClass({
  render() {
    // console.log(this.props.bands);
    let BandsList = this.props.bands.map((band, i, arr) => {
      return (
        <SearchItem key={i} band={band} />
      );
    });
    return(
        <ul id="bands-list">
          {BandsList}
        </ul>
    )
  }
});
