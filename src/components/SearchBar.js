import React from 'react';

class SearchBar extends React.Component {
<<<<<<< HEAD
  state = { term: 'Hello' };

  onInputChange = e => {
    this.setState({ term: e.target.value });
=======
  state = { searchTerm: '' };

  onInputChange = e => {
    this.setState({ searchTerm: e.target.value });
>>>>>>> 52f4ae0dde483f27ab5e64e17ae5f820ff4749a2
  };

  render() {
    return (
<<<<<<< HEAD
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
=======
      <div className="ui container">
        <div className="ui input">
          <input
            value={this.state.searchTerm} // Controlled Component?
            type="text"
            placeholder="Search..."
            onChange={this.onInputChange}
          />
        </div>
>>>>>>> 52f4ae0dde483f27ab5e64e17ae5f820ff4749a2
      </div>
    );
  }
}
<<<<<<< HEAD
=======

>>>>>>> 52f4ae0dde483f27ab5e64e17ae5f820ff4749a2
export default SearchBar;
