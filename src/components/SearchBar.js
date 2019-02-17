import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchInput: ''
  };

  onInputChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchInput);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="imageS earch">
              Image Search
              <input
                id="imageSearch"
                type="text"
                value={this.state.searchInput}
                onChange={this.onInputChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
