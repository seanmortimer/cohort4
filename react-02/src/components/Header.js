import React, { Component } from 'react';
import { ReactComponent as Chainring } from '../images/chainring.svg'
import { ReactComponent as Wheel } from '../images/bike-wheel.svg'
import { ReactComponent as SickWhip } from '../images/sick-whip.svg'
import { ReactComponent as Rotor } from '../images/brake-rotor.svg'

const Icon = (props) => {
    return (
        <div className="clIcon">
            <props.pic />
        </div>
    )
}

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: "clActive",
            regular: "clIcon",
        }
    }

    render() {
        return (
            <nav className="clHeader">
                <div>
                    <Wheel className={this.state.active} />Home
                </div>
                <div>
                    <Chainring className={this.state.regular} />Tic Tac Toe
                </div>
                <div>
                    <SickWhip className={this.state.regular} />Coming
                </div>
                <div>
                    <Rotor className={this.state.regular} />Soon
                </div>
                <div>
                    <Wheel className={this.state.regular} />Thanks
                </div>

            </nav>
        )
    }
}

export default Header;