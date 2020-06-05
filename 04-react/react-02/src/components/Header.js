import React, { Component } from 'react';
import { ReactComponent as Chainring } from '../images/chainring.svg';
import { ReactComponent as Wheel } from '../images/bike-wheel.svg';
import { ReactComponent as SickWhip } from '../images/sick-whip.svg';
import { ReactComponent as Rotor } from '../images/brake-rotor.svg';


class Header extends Component {
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
    return (
      <nav className="clHeader">
        <div>
          <Wheel
            // className={this.state.regular}
            className={(this.state.active === 'home') ? 'clActive' : 'clIcon'}
            role="link"
            onClick={() => this.handleNavClick('home')}
            name="home"
          />
          <div>Home</div>
        </div>
        <div>
          <Chainring
            className={(this.state.active === 'tictac') ? 'clActive' : 'clIcon'}
            role="link"
            onClick={() => this.handleNavClick('tictac')}
            name="tictac"
          />
          <div>Tic Tac Toe</div>
        </div>
        <div>
          <SickWhip
            className={(this.state.active === 'banking') ? 'clActive' : 'clIcon'}
            role="link"
            onClick={() => this.handleNavClick('banking')}
            name="banking"
          />
          <div>Banking</div>
        </div>
        <div>
          <Rotor
            className={(this.state.active === 'cities') ? 'clActive' : 'clIcon'}
            role="link"
            onClick={() => this.handleNavClick('cities')}
            name="cities"
          />
          <div>Cities of The World</div>
        </div>
        <div>
          <Chainring
            className={(this.state.active === 'lists') ? 'clActive' : 'clIcon'}
            role="link"
            onClick={() => this.handleNavClick('lists')}
            name="lists"
          />
          <div>Linked Lists</div>
        </div>
        <div>
          <Wheel
            className={(this.state.active === 'lifo') ? 'clActive' : 'clIcon'}
            role="link"
            name="lifo"
            onClick={() => this.handleNavClick('lifo')}
          />
          <div>Stacks vs Queues</div>
        </div>

      </nav>
    );
  }
}

export default Header;
