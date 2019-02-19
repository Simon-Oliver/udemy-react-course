import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async searchInput => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: searchInput },
      headers: {
        Authorization: `Authorization: Client-ID ${process.env.REACT_APP_Access_Key_KEY}`
      }
    });

    console.log(response.data.results);

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.images && <ImageList images={this.state.images} />}
      </div>
    );
  }
}

export default App;
