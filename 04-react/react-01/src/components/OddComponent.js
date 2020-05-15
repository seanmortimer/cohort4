import React from 'react';

class OddComp extends React.Component {
    constructor(props) {
        super();

    }
    render() {
        if (this.props.counter %2 !== 0 ) {
            // console.log('counter odd!', this.props.counter);
            
        return (
            <div>
                <h2>The counter is odd: {this.props.counter}</h2>
            </div>
        )}
        else return <p />
    }
}

export default OddComp;