import React, { Component } from 'react';
import { ReactComponent as Chainring } from '../assets/img/chainring.svg';
import { ReactComponent as Wheel } from '../assets/img/bike-wheel.svg';
import { ReactComponent as SickWhip } from '../assets/img/sick-whip.svg';
import { ReactComponent as Rotor } from '../assets/img/brake-rotor.svg';
import { ThemeContext } from '../ThemeContext';


class Header extends Component {
  // static contextType = ThemeContext;

  constructor(props) {
    super(props);

    this.state = { active: 'home' };
    this.handleNavClick = this.handleNavClick.bind(this);
  }


  handleNavClick(target) {
    this.setState({ active: target });
    this.props.onNavClick(target);
  }

  render() {
    const color = this.context.theme.sidebar;
    const active = `clActive-${color}`;
    const inactive = `clIcon-${color}`;

    return (
      <nav className="clHeader">
        <div>
          <Wheel
            className={(this.state.active === 'home') ? active : inactive}
            role="link"
            onClick={() => this.handleNavClick('home')}
            name="home"
          />
          <div>Home</div>
        </div>
        <div>
          <Chainring
            className={(this.state.active === 'tictac') ? active : inactive}
            role="link"
            onClick={() => this.handleNavClick('tictac')}
            name="tictac"
          />
          <div>Tic Tac Toe</div>
        </div>
        <div>
          <Rotor
            className={(this.state.active === 'banking') ? active : inactive}
            role="link"
            onClick={() => this.handleNavClick('banking')}
            name="banking"
          />
          <div>Banking</div>
        </div>
        <div>
          <SickWhip
            className={(this.state.active === 'cities') ? active : inactive}
            role="link"
            onClick={() => this.handleNavClick('cities')}
            name="cities"
          />
          <div>Cities of The World</div>
        </div>
        <div>
          <Rotor
            className={(this.state.active === 'lists') ? active : inactive}
            role="link"
            onClick={() => this.handleNavClick('lists')}
            name="lists"
          />
          <div>Linked Lists</div>
        </div>
        <div>
          <Chainring
            className={(this.state.active === 'lifo') ? active : inactive}
            role="link"
            name="lifo"
            onClick={() => this.handleNavClick('lifo')}
          />
          <div>Stacks vs Queues</div>
        </div>
        <div>
          <Wheel
            className={(this.state.active === 'theme') ? active : inactive}
            role="link"
            name="theme"
            onClick={() => this.handleNavClick('theme')}
          />
          <div>Theme Settings</div>
        </div>
      </nav>
    );
  }
}

Header.contextType = ThemeContext;

export default Header;
