import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';

class ReactHome extends Component {
  render() {
    return (
      <div className="clReactMain">
        <h1>Welcome to React!</h1>
        <h5>Click on a spinning icon to navigate the app</h5>
        <img src={logo} className="App-logo" alt="logo" />
        <p>And most importantly, have fun!</p>
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
