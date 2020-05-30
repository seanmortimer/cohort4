import React, { Component } from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/light-bootstrap-dashboard.css';
import './cities.css';
import SideBar from './SideBar';
import Community from './communityClass';
import Card from './Card';
import AddCityModal from './AddCityModal';
import postData from './cityfetch';

const urlPy = 'http://localhost:5000/';
const geoDb = 'http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=1';
const cities = [
  { key: 1, lat: 51.05, long: -114.05, name: 'Calgary', pop: 1340000 },
  { key: 2, lat: 53.55, long: -113.49, name: 'Edmonton', pop: 981000 },
  { key: 3, lat: 52.28, long: -113.81, name: 'Red Deer', pop: 106000 },
  { key: 4, lat: -32.78, long: -71.53, name: 'Quintero', pop: 25300 },
  { key: 5, lat: 0.00, long: 50.00, name: 'Equator Town', pop: 5000 },
  { key: 6, lat: -33.93, long: 18.42, name: 'Cape Town', pop: 3780000 },
  { key: 7, lat: 4.71, long: -74.07, name: 'Bogota', pop: 7400000 },
];


class Cities extends Component {
  constructor(props) {
    super(props);
    // const cities = []
    this.community = new Community();

    this.state = {
      showAdd: false,
      // showEdit: false,
      community: this.community,
    };
    this.onShowAdd = this.onShowAdd.bind(this);
    // this.onShowEdit = this.onShowEdit.bind(this);
    this.handleAddCity = this.handleAddCity.bind(this);
    this.handleDeleteCity = this.handleDeleteCity.bind(this);
    this.handleEditCity = this.handleEditCity.bind(this);
  }

  async componentDidMount() {
    let serverCities = [];
    try {
      serverCities = await postData(`${urlPy}all`);
    } catch (error) {
      // console.error(error);
      return;
    }
    console.log('Component Mounted :>> ', serverCities);
    if (serverCities.length) serverCities.forEach((city) => this.community.createCity(city));
    else {
      cities.forEach((city) => this.community.createCity(city));
      try {
        this.community.cities.forEach(async (city) => postData(`${urlPy}add`, city));
      } catch (error) {
        // console.error(error);
        return;
      }
    }
    this.setState({ community: this.community });
  }

  onShowAdd() {
    this.setState({ showAdd: true });
  }

  onHideAdd() {
    this.setState({ showAdd: false });
  }

  async handleAddCity(city) {
    const newCity = this.community.createCity(city);
    // console.log('city :>> ', newCity);
    try {
      postData(`${urlPy}add`, newCity);
    } catch (error) {
      // console.error(error);
      return;
    }
    this.setState({ community: this.community });
  }

  async handleDeleteCity(key) {
    try {
      postData(`${urlPy}delete`, { key });
    } catch (error) {
      // console.error(error);
      return;
    }
    this.community.deleteCity(key);
    this.setState({ community: this.community });
  }

  handleEditCity(key, popChange) {
    const city = this.community.findByKey(key);
    if (popChange < 0) {
      city.movedOut(popChange * -1);
    }
    if (popChange > 0) {
      city.movedIn(popChange);
    }
    try {
      postData(`${urlPy}update`, city);
    } catch (error) {
      // console.error(error);
      return;
    }
    this.setState({ community: this.community });
  }

  async getRandom() {
    const i = Math.floor(Math.random() * 2E4);
    // console.log('i :>> ', i);
    fetch(`${geoDb}&offset=${i}`).then((response) => response.json()).then((city) => {
      console.log('city :>> ', city.data[0].id);
      // this.setState({ robots: users })
    });

    let data = null;
    console.log('Random city time!');
    // console.log('data :>> ', data);
  }

  render() {
    const { community } = this.state;
    const cards = community.cities.map((city) => (
      <Card
        key={city.key}
        cityId={city.key}
        city={city}
        onEdit={this.onShowEdit}
        onDelete={this.handleDeleteCity}
        onEditSubmit={this.handleEditCity}
      />
    ));
    // console.log('cards :>> ', cards || );
    return (
      <div>
        <div className="wrapper">
          <SideBar cities={community} onRandom={this.getRandom} />
          <div className="main-panel">
            <nav className="navbar">
              <div className="container-fluid">
                <div className="navbar-brand">Check out all these cities!</div>
                <button
                  className="btn btn-success btn-fill  m-0 pt-0"
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
                  {cards.length ? cards : 'Add some cities!'}
                </div>
              </div>

            </div>
            <AddCityModal
              show={this.state.showAdd}
              onHide={() => this.onHideAdd()}
              onAdd={this.handleAddCity}
            />
            {/* <EditCityModal
              show={this.state.showEdit}
              onHide={() => this.hideEdit()}
              // onEdit={this.handleEditCity}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Cities;
