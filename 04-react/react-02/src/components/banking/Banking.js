import React, { Component } from 'react';
import Title from './Title'

class Banking extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main>
                <Title></Title>
                {/* <DepositWithdraw></DepositWithdraw> */}
                {/* <ActCreator></ActCreator> */}
                {/* <Messages></Messages> */}
                {/* <ActContainer></ActContainer> // This might not be neccessary? */}
            </main>
        );
    }
}

export default Banking;
