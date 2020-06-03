import React from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/light-bootstrap-dashboard.css';
import '../../assets/css/cities.css';
import ListSideBar from './ListSideBar';
import ListCard from './ListCard';
// import AddCityModal from './AddCityModal';


function Lists() {
  return (
    <div>
      <div className="wrapper">
        <ListSideBar />
        <div className="main-panel">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-brand">Check out these lists!</div>
              <button
                className="btn btn-success btn-fill  m-0 pt-0"
                type="button"
              >
                <i className="nc-icon nc-simple-add" />
                <span id="idAddBtn">
                  {' '}Add a thing
                </span>
              </button>
            </div>
          </nav>
          <div className="content">
            <div className="container-fluid">
              <div className="card-deck" id="idCardDeck">
                {/* {cards.length ? cards : 'Add some cities!'} */}
                {/* Here will be cards! */}
                <ListCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lists;
