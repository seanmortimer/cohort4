import React from 'react';

class EvenComp extends React.Component {
    constructor(props) {
        super();

    }
    render() {
        if (this.props.counter %2 === 0 ) {
            // console.log('counter even!', this.props.counter);
            
        return (
            <div>
                <h2>The counter is even: {this.props.counter}</h2>
            </div>
        )}
        else return null;
    }
}

export default EvenComp;