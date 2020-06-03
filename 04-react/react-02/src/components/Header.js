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
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(e) {
    // console.log('e.target :>> ', e.target);
    // e.target.setAttribute('class', 'clActive');
    this.props.onNavClick(e.target.getAttribute('name'));
  }

  render() {
    return (
      <nav className="clHeader">
        <div>
          <Wheel
            className={this.state.regular}
            role="link"
            onClick={this.handleNavClick}
            name="home"
          />
          <div>Home</div>
        </div>
        <div>
          <Chainring
            className={this.state.regular}
            role="link"
            onClick={this.handleNavClick}
            name="tictac"
          />
          <div>Tic Tac Toe</div>
        </div>
        <div>
          <SickWhip
            className={this.state.regular}
            role="link"
            onClick={this.handleNavClick}
            name="banking"
          />
          <div>Banking</div>
        </div>
        <div>
          <Rotor
            className={this.state.regular}
            role="link"
            onClick={this.handleNavClick}
            name="cities"
          />
          <div>Cities of The World</div>
        </div>
        <div>
          <Wheel
            className={this.state.regular}
            role="link"
            name="lists"
          onClick={this.handleNavClick}
          />
          <div>Lists and Hooks</div>
        </div>

      </nav>
    );
  }
}

export default Header;
