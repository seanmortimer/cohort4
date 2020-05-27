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
    };
  }

  handleNavClick(e) {
    // console.log('clicked:', e.target);
    console.log('clicked:', e.target.textContent);
  }

  render() {
    return (
      <nav className="clHeader">
        <div key="home" name="home">
          <Wheel className={this.state.regular} role="link" onClick={this.handleNavClick} />
          <div>Home</div>
        </div>
        <div key="tictac">
          <Chainring className={this.state.regular} role="link" onClick={this.handleNavClick} />
          <div>Tic Tac Toe</div>
        </div>
        <div key="banking">
          <SickWhip className={this.state.regular} role="link" onClick={this.handleNavClick} />
          <div>Banking</div>
        </div>
        <div>
          <Rotor className={this.state.regular} role="link" onClick={this.handleNavClick} />
          <div>Coming</div>
        </div>
        <div>
          <Wheel className={this.state.regular} role="link" onClick={this.handleNavClick} />
          <div>Soon</div>
        </div>

      </nav>
    );
  }
}

export default Header;
