/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
// import Game from './components/TicTacToe';
import Banking from './components/banking/Banking';

class App extends Component() {
  onNavClick() {
    return <Home />
  }
  return (
    <div className="App">
      <Header onNavClick={this.onNavClick} />
      <Banking />
      {/* <Game /> */}
      
    </div>
  );
}

export default App;
