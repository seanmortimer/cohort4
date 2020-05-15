import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComp from './components/MyComponent'
import EvenComp from './components/EvenComponent'
import OddComp from './components/OddComponent'

class App extends Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD"
    };
  }

  onPushMe = () => {
    this.counter++;
    console.log("You pushed me", this.counter);
    this.setState({ myState: 'now: ' + this.counter })
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>I am in charge of this application and my name is Sean {this.state.myState}</h1>
          <button onClick={this.onPushMe}>
            Push Me
          </button>
          <MyComp whatToSay="What Ever!" counter={this.counter}  />
          <EvenComp counter={this.counter} />
          <OddComp counter={this.counter} />
          <p>
            A very useful app by Sean
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    )
  };
}

export default App;
