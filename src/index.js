import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <label className="label" htmlFor="username">
        Enter Username
      </label>
      <input id="username" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
