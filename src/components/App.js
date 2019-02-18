import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit = searchInput => {
    console.log(
      axios.get('https://api.unsplash.com/search/photos', {
        params: { query: searchInput },
        headers: {
          Authorization: `Authorization: Client-ID ${process.env.REACT_APP_Access_Key_KEY}`
        }
      })
    );
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
