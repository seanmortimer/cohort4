import React, { Component } from 'react';

class ActCreator extends Component {
  render() {
    return (
      <div id="idActCreate">
        <h3>Create new account:</h3>
        <form>
          <input type="text" placeholder="enter account name" />
          <button type="button">Create Account</button>
        </form>
      </div>
    );
  }
}

export default ActCreator;
