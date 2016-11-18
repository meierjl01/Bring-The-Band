import React from 'react';
import store from '../store';
import SearchList from './searchlist';

export default React.createClass({
  getInitialState() {
    return {
      bands: [{artists: {items: [] }}]
    }
  },
  componentDidMount() {
    store.bands.on('update change', () => {
      this.setState({bands: store.bands.toJSON()})
    });
  },
  render() {
    console.log(this.state.bands[0].artists.items);
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input id="search-box" type="text" placeholder="Search for bands here" />
          <input id="search-button" type="submit" value="Search" />
        </form>
          <SearchList bands={this.state.bands[0].artists.items} />
      </div>
    );
  },
  handleSearch(e) {
    e.preventDefault();
    console.log('clicked search');
    let artist = document.getElementById('search-box').value;
    store.bands.getBands(artist);
  }
});
