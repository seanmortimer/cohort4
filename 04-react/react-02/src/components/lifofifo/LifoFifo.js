import React, { useState } from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/light-bootstrap-dashboard.css';
import '../../assets/css/lists.css';
import LifoSideBar from './LifoSideBar';
import LifoComponent from './LifoComponent';
import FifoComponent from './FifoComponent';
import { LifoList, FifoList } from './lifoFifo-logic';
import animals from '../../assets/data/animal-alphabet.json';
import moreAnimals from '../../assets/data/animals.json';


const stack = new LifoList();
const queue = new FifoList();

function LifoFifo() {
  const [counter, setCounter] = useState(0);
  const [size, setSize] = useState(0);

  let nextSubject = null;
  let nextAmnt = null;
  let random = false;

  const next = () => {
    if (counter < 26) {
      nextSubject = animals[(counter)];
    } else {
      random = true;
      const i = Math.floor(Math.random() * moreAnimals.length);
      nextSubject = moreAnimals[i];
    }
    nextAmnt = (counter + 1) * 10;
  };

  const addToBoth = () => {
    stack.addToStack(nextSubject, nextAmnt);
    queue.enqueue(nextSubject, nextAmnt);
    setCounter(counter + 1);
    setSize(size + 1);
  };

  const deleteFromBoth = () => {
    stack.deleteFromStack();
    queue.dequeue();
    setSize(size - 1);
  };

  next();

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
            <div>
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
                  onClick={deleteFromBoth}
                >
                  <i className="nc-icon nc-simple-remove" />
                  &nbsp;
                  Remove
                </button>
              </div>
              {random ? <p>Wow! You sure like lists of animals!!</p> : null}
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
