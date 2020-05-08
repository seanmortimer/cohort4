import React from 'react';

class MyComp extends React.Component {
    
    render() {
       const {whatToSay, counter} = this.props;
        return (
            <div>
                <h2>{whatToSay} The counter is now: {counter}</h2>
            </div>
        )
    }
}

export default MyComp;