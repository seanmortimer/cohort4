import React, { Component } from 'react';
import logo from '../images/logo.svg';

class ReactHome extends Component {
  render() {
    return (
      <div className="clReactMain">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and have some fun!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}

export default ReactHome;
