import React, { Component } from 'react';

class ActTotals extends Component {
  render() {
    return (
      <div id="idActTotals">
        <h3>Detailed information</h3>
        <p>
          Total balance:
          <span>$0.00</span>
        </p>
        <h4>Highest balance account:</h4>
        <p>
          <span>Temp high name</span>
          <span>$0.00</span>
        </p>
        <h4>Lowest balance account:</h4>
        <p>
          <span>Temp low name</span>
          <span>$0.00</span>
        </p>
      </div>
    );
  }
}

export default ActTotals;