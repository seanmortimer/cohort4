import React, { Component } from 'react';

class ActCreator extends Component {
  constructor(props) {
    super(props);
    this.handleNewAct = this.handleNewAct.bind(this);
  }

  handleNewAct(e) {
    e.preventDefault();
    const actName = e.target.actName.value;
    this.props.onNewAct(actName);
    e.target.actName.value = '';
  }

  render() {
    // console.log('this.props. :>> ', this.props.onSubmit);
    return (
      <div id="idActCreate">
        <h3>Create new account:</h3>
        <form onSubmit={this.handleNewAct}>
          <input type="text" name="actName" placeholder="enter account name" />
          <button type="submit">Create Account</button>
        </form>
      </div>
    );
  }
}

export default ActCreator;
