/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import ReactHome from './components/ReactHome';
import Game from './components/tictactoe/TicTacToe';
import Banking from './components/banking/Banking';
import Cities from './components/cities/Cities';
import LinkedLists from './components/linkedLists/LinkedLists';
import LifoFifo from './components/lifoFifo/LifoFifo';
import ThemeSettings from './components/theme/ThemeSettings';
import { themes, ThemeContext } from './ThemeContext';
import LinkedList from './components/linkedLists/linkedListLogic';


class App extends Component {
  constructor(props) {
    super(props);

    const linkedList = new LinkedList();

    this.chooseTheme = (theme) => {
      this.setState(() => ({ theme: themes[theme] }));
    };

    this.state = {
      theme: themes.blue,
      chooseTheme: this.chooseTheme,
      page: 'home',
      linkedList: linkedList
    };
  }

  onNavClick = (page) => {
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
      case 'lists':
        currentPage = <LinkedLists list={this.state.linkedList} />;
        break;
      case 'lifo':
        currentPage = <LifoFifo />;
        break;
      case 'theme':
        currentPage = <ThemeSettings />;
        break;
      // no default
    }
    return (
      <ThemeContext.Provider value={this.state}>
        {/* <ThemeContext.Provider> */}
        <div className="App">
          <Header onNavClick={this.onNavClick} />
          {currentPage}
          <footer className="text-center">© 2020{' '}
            <a href="http://www.seanmortimer.com">
              Sean Mortimer
            </a>
            {' '}Check out the source code here:{' '}
            <a href="https://github.com/seanmortimer/cohort4/tree/master/03-objects">
              github.com/seanmortimer
            </a>
          </footer>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
