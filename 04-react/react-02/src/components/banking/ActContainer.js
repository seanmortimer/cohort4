import React, { Component } from 'react';
import ActCards from './ActCards';
import ActTotals from './ActTotals';

class ActContainer extends Component {
  render() {
    return (
      <div>
        <h2>Your Accounts</h2>
        <div id="idActContainer" role="group">
          <div id="idCardContainer">
            <ActCards />
            <ActCards />
            <ActCards />
            <ActCards />
          </div>
          <ActTotals />
        </div>
      </div>
    );
  }
}

export default ActContainer;
