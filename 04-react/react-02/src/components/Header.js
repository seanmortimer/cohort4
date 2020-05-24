import React, { Component } from 'react';
import { ReactComponent as Chainring } from '../images/chainring.svg';
import { ReactComponent as Wheel } from '../images/bike-wheel.svg';
import { ReactComponent as SickWhip } from '../images/sick-whip.svg';
import { ReactComponent as Rotor } from '../images/brake-rotor.svg';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'clActive',
      regular: 'clIcon',
    }
  }

  render() {
    return (
      <nav className="clHeader">
        <div>
          <Wheel className={this.state.regular} />
          <div>Home</div>
        </div>
        <div>
          <Chainring className={this.state.regular} />
          <div>Tic Tac Toe</div>
        </div>
        <div>
          <SickWhip className={this.state.regular} />
          <div>Banking</div>
        </div>
        <div>
          <Rotor className={this.state.regular} />
          <div>Coming</div>
        </div>
        <div>
          <Wheel className={this.state.regular} />
          <div>Soon</div>
        </div>

      </nav>
    )
  }
}

export default Header;