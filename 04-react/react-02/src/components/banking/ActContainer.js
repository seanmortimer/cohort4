import React, { Component } from 'react';
import ActCards from './ActCards';

class ActContainer extends Component {
  render() {
    return (
      <div>
        <h2>Your Accounts</h2>
        <div role="group">
          <ActCards />
        </div>
      </div>
    );
  }
}

export default ActContainer;
