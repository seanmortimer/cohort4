import React, { useState, useEffect } from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/light-bootstrap-dashboard.css';
import '../../assets/css/lists.css';
import animals from '../../assets/data/animals.json';
import ListSideBar from './ListSideBar';
import ListCard from './ListCard';
import LinkedList from './listLogic';

const demoData = [['Bat', 10], ['Dog', 20], ['Koala', 30], ['Panda', 40]];

function Lists() {
  const [subj, setSubj] = useState('');
  const [amnt, setAmnt] = useState('');
  const [list, setList] = useState(new LinkedList());
  const cards = [];

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   demoData.forEach((value) => list.insertLast(value[0], value[1]));
  //   setList(() => list);
  //   console.log('use Effect', list);
  // }, [list]);

  // console.log('list :>> ', list);

  const handleSubjectChange = (e) => {
    // console.log('e.target :>> ', e.target.value);
    setSubj(e.target.value);
  };

  const handleAmountChange = (e) => {
    // console.log('e.target :>> ', e.target.value);
    setAmnt(e.target.value);
  };

  const handleInsert = () => {
    list.insertFirst(subj, amnt);
    setList(list);
  };

  if (list.size === 0) {
    demoData.forEach((value) => list.insertLast(value[0], value[1]));
  }

  for (let i = 0; i < list.size; i++) {
    // console.log('list.showAtIndex(i) :>> ', list.showAtIndex(i));
    cards.push(<ListCard key={i} node={list.showAtIndex(i)} index={i} />);
  }

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
            <div className="container">
              <div className="row">
                <div className="col-sm" id="idCtrlPanel">
                  <h4>Linked List</h4>
                  <form className="form-group">
                    <p>
                      <label className="mt-3" htmlFor="subject">Subject:
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          value={subj}
                          onChange={handleSubjectChange}
                        />
                      </label>
                    </p>
                    <p>
                      <label className="mt-3" htmlFor="amount">Amount:
                        <input
                          type="text"
                          className="form-control"
                          name="amount"
                          placeholder="Amount"
                          value={amnt}
                          onChange={handleAmountChange}
                        />
                      </label>
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-success btn-fill"
                        onClick={handleInsert}
                      >
                        Insert
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-fill m-1"
                      >
                        Insert Random
                      </button>
                    </div>
                  </form>
                  <h4>Current item:</h4>
                  <div className="card ">
                    <div className="card-body">
                      <div className="text-nowrap">
                        <div id="idListItem">
                          Here be the list stuff
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-success btn-fill p-2"
                    onClick={handleInsert}
                  >
                    <i className="nc-icon nc-stre-left" />
                    <i className="nc-icon nc-stre-left" />
                    &nbsp;
                    Head
                  </button>
                  <button
                    type="button"
                    className="btn btn-success btn-fill m-1 p-2"
                  >
                    <i className="nc-icon nc-stre-left" />
                    &nbsp;
                    Previous
                  </button>
                  <button
                    type="button"
                    className="btn  btn-success btn-fill p-2"
                    onClick={handleInsert}
                  >
                    Next
                    &nbsp;
                    <i className="nc-icon nc-stre-right" />
                  </button>
                  <button
                    type="button"
                    className="btn  btn-success btn-fill m-1 p-2"
                  >
                    Tail
                    &nbsp;
                    <i className="nc-icon nc-stre-right" />
                    <i className="nc-icon nc-stre-right" />
                  </button>
                </div>
                <div className="col-sm">
                  <div className="card-deck" id="idCardDeck">
                    {/* {cards.length ? cards : 'Add some cities!'} */}
                    {/* Here will be cards! */}
                    {/* <ListCard /> */}
                    {cards}
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

export default Lists;
