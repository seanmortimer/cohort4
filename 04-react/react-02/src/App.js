/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ReactHome from './components/ReactHome';
import Game from './components/TicTacToe';
import Banking from './components/banking/Banking';
import Cities from './components/cities/Cities';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'cities' };
    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick(page) {
    // console.log('page :>> ', page);
    // switch (page) {
    //   case 'home':

    //     break;

    //   default:
    //     break;
    // }
    this.setState({ page });
  }

  render() {
    let currentPage = <ReactHome className />;
    switch (this.state.page) {
      case 'home':
        currentPage = <ReactHome />;
        break;
      case 'tictac':
        currentPage = <Game />;
        break;
      case 'banking':
        currentPage = <Banking />;
        break;
      case 'cities':
        currentPage = <Cities />;
        break;
      default:
        break;
    }
    return (
      <div className="App">
        <Header onNavClick={this.onNavClick} />
        {currentPage}
        <footer>A React app by{' '}
          <a href="http://www.seanmortimer.com">
            Sean Mortimer
          </a>
          {' '}Check out the source code here:{' '}
          <a href="https://github.com/seanmortimer/cohort4/tree/master/03-objects">
            github.com/seanmortimer
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
