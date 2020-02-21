import React from 'react';

class ClassComp extends React.Component {

    onClick = (e) => {
        console.log("onClick:", e.target);
        this.props.callback();
    }
    render() {
      return (
        <h1 onClick={this.onClick}>Hello ClassComp, {JSON.stringify(this.props)}</h1>
      )
    }
  }

  export default ClassComp;