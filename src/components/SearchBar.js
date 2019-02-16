import React from 'react';

class SearchBar extends React.Component {
  state = {};

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="imageSearch">
              Image Search
              <input id="imageSearch" type="text" />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
