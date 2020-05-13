import React, { Component } from 'react';
import Icon from './Icon'
import { ReactComponent as Chainring } from '../images/chainring.svg'
import { ReactComponent as Wheel } from '../images/bike-wheel.svg'
import { ReactComponent as SickWhip } from '../images/sick-whip.svg'
import { ReactComponent as Rotor } from '../images/brake-rotor.svg'

class Header extends Component {
    render() {
        return (
            <header className="clHeader">
                <Icon pic={Wheel} />
                <Icon pic={Chainring} />
                <Icon pic={SickWhip} />
                <Icon pic={Rotor} />
                <Icon pic={Wheel} />
            </header>
        )
    }
}

export default Header;