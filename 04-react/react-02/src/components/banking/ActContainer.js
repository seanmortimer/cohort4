import React, { Component } from 'react';
import ActCard from './ActCard';
import ActTotals from './ActTotals';

class ActContainer extends Component {
  render() {
    const acts = this.props.accounts.map((act) =>
      <ActCard key={act.actName} act={act} />);
    return (
      <div>
        <h2>Your Accounts</h2>
        <div id="idActContainer">
          <div id="idCardContainer">
            {acts}
          </div>
          <ActTotals accounts={this.props.accounts} />
        </div>
      </div>
    );
  }
}

export default ActContainer;
