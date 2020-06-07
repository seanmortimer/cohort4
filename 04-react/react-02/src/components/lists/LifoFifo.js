import React, { useState, useEffect } from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/light-bootstrap-dashboard.css';
import '../../assets/css/lists.css';
import LifoSideBar from './LifoSideBar';
import ListCard from './ListCard';
// import ListNav from './ListNav';
// import ListInsert from './ListInsert';
import LinkedList from './LinkedListLogic';

const demoData = [['Ant', 10], ['Bat', 20], ['Cat', 30], ['Dog', 40]];

function LifoFifo() {
  const nde = { subject: 'Ant', amount: 10 };
  const subject = 'Ant';
  const amount = 10;

  function addToBoth() {

  }


  return (
    <div>
      <div className="wrapper">
        <LifoSideBar />
        <div className="main-panel">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-brand">Check out these lists!</div>
              <div className="text-muted">Made using React Hooks</div>
            </div>
          </nav>
          <div className="content">
            <div className="container mb-4">
              {/* <p>And here are the controls, seeee</p> */}
              <div className="card border border-primary">
                <div className="card-body">
                  <div className="">
                    <div>Next item: {subject}, ${amount} </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-primary btn-fill p-2 pr-4 pl-3 mr-2"
              >
                <i className="nc-icon nc-simple-add" />
                &nbsp;
                Add
              </button>
              <button
                type="button"
                className="btn btn-sm btn-danger btn-fill p-2"
              // onClick={handleNavHead}
              >
                <i className="nc-icon nc-simple-remove" />
                &nbsp;
                Remove
              </button>

            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm ">
                  <h3 className="mt-1 mb-3">Stack</h3>
                  <div className="card-deck clDivider" id="idCardDeck">
                    <div className="card"> HERE THERE BE CARDS</div>
                  </div>
                </div>
                <div className="col-sm">
                  <h3 className="mt-1 mb-3">Queue</h3>
                  <div className="card-deck" id="idCardDeck">
                    <div className="card"> HERE THERE BE CARDS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifoFifo;
