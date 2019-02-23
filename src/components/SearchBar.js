import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  onInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui input">
          <input
            value={this.state.searchTerm}
            type="text"
            placeholder="Search..."
            onChange={this.onInputChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
