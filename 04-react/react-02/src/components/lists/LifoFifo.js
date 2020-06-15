import React, { useState, useEffect } from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/light-bootstrap-dashboard.css';
import '../../assets/css/lists.css';
import LifoSideBar from './LifoSideBar';
import LifoComponent from './LifoComponent';
import FifoComponent from './FifoComponent';
import { LifoList, FifoList } from './LifoFifo-Logic';
import animals from '../../assets/data/animal-alphabet.json';


const stack = new LifoList();
const queue = new FifoList();

function LifoFifo() {
  const [counter, setCounter] = useState(1);

  const nextSubject = animals[(counter - 1)];
  const nextAmnt = counter * 10;

  const addToBoth = () => {
    stack.addToStack(nextSubject, nextAmnt);
    queue.enqueue(nextSubject, nextAmnt);
    setCounter(counter + 1);
  }

  // console.log('stack.size :>> ', stack.size);
  // console.log('queue.size :>> ', queue.size);

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
            {/* <div className="container mb-4"> */}
            <div className="" id="idLifo1">
              {/* <p>And here are the controls, seeee</p> */}
              <div className="card border border-primary" id="idLifoNextCard">
                <div className="card-body">
                  <div className="">
                    <div>Next item: {nextSubject}, ${nextAmnt} </div>
                  </div>
                </div>
              </div>
              <div id="idLifoBtns">
                <button
                  type="button"
                  className="btn btn-sm btn-primary btn-fill m-2"
                  onClick={addToBoth}
                >
                  <i className="nc-icon nc-simple-add" />
                  &nbsp;
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-danger btn-fill m-1"
                >
                  <i className="nc-icon nc-simple-remove" />
                  &nbsp;
                  Remove
                </button>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm ">
                  <LifoComponent stack={stack} />
                </div>
                <div className="col-sm">
                  <FifoComponent queue={queue} />
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
