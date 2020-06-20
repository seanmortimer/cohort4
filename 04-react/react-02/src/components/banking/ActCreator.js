import React, { Component } from 'react';

class ActCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { actName: '' };
  }

  handleChange = (e) => {
    this.setState({ actName: e.target.value });
  }

  handleNewAct = (e) => {
    e.preventDefault();
    if (!this.state.actName) return;
    this.props.onNewAct(this.state.actName);
    this.setState({ actName: '' });
  }

  render() {
    return (
      <div id="idActCreate">
        <h3>Create new account:</h3>
        <form onSubmit={this.handleNewAct}>
          <input
            type="text"
            name="actName"
            placeholder="enter account name"
            value={this.state.actName}
            onChange={this.handleChange}
            autoComplete="off"
          />
          <button type="submit">Create Account</button>
        </form>
      </div>
    );
  }
}

export default ActCreator;
