import React, { Component } from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/light-bootstrap-dashboard.css';
import './cities.css';
import SideBar from './SideBar';
import Community from './communityClass';
import Card from './Card';
import AddCityModal from './AddCityModal';
import EditCityModal from "./EditCityModal";


const cities = [
  { key: 1, lat: 51.05, long: -114.05, name: 'Calgary', pop: 1340000 },
  { key: 2, lat: 53.55, long: -113.49, name: 'Edmonton', pop: 981000 },
  { key: 3, lat: 52.28, long: -113.81, name: 'Red Deer', pop: 106000 },
  { key: 4, lat: -32.78, long: -71.53, name: 'Quintero', pop: 25300 },
  { key: 5, lat: 0.00, long: 50.00, name: 'Equator Town', pop: 5000 },
  { key: 6, lat: -33.93, long: 18.42, name: 'Cape Town', pop: 3780000 },
  { key: 7, lat: 4.71, long: -74.07, name: 'Bogota', pop: 7400000 },
];

const comm = new Community();
cities.forEach((city) => comm.createCity(city));


class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = { showAdd: false, showEdit: false };
  }

  onShowAdd = () => {
    this.setState({ showAdd: true });
  }

  onHideAdd = () => {
    this.setState({ showAdd: false });
  }

  showEdit = () => {
    this.setState({ showEdit: true });
  }

  hideEdit = () => {
    this.setState({ showEdit: false });
  }

  render() {
    const cards = comm.cities.map((city) =>
      <Card key={city.key} city={city} modal={this.showEdit} />);

    return (
      <div>
        <div className="wrapper">
          <SideBar cities={comm} />
          <div className="main-panel">
            <nav className="navbar">
              <div className="container-fluid">
                <div className="navbar-brand">Check out all these cities!</div>
                <button
                  className="btn btn-success btn-fill  m-0 pt-0 "
                  type="button"
                  onClick={this.onShowAdd}
                >
                  <i className="nc-icon nc-simple-add" />
                  <span id="idAddBtn">
                    {' '}Add a city
                  </span>
                </button>
              </div>
            </nav>
            <div className="content">
              <div className="container-fluid">
                <div className="card-deck" id="idCardDeck">
                  {cards}
                </div>
              </div>

            </div>
            <AddCityModal
              show={this.state.showAdd}
              onHide={() => this.onHideAdd()}
            />
            <EditCityModal
              show={this.state.showEdit}
              onHide={() => this.hideEdit()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cities;
