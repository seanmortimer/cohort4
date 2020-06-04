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
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState('');


  // Add demo data on first load
  function demoList() {
    demoData.forEach((value) => list.insertLast(value[0], value[1]));
  }

  function updateCard() {
    if (!list.size) setCurrentCard('');
    else {
      const sub = list.showAtIndex(currentIndex).subject;
      const a = list.showAtIndex(currentIndex).amount;
      const card = `Subject: ${sub},  Amount: $${a}`;
      setCurrentCard(card);
    }
  }

  useEffect(demoList, []);
  useEffect(updateCard, [currentIndex]);

  useEffect(() => {
    const c = [];
    for (let i = 0; i < list.size; i++) {
      // console.log('list.showAtIndex(i) :>> ', list.showAtIndex(i));
      let sel = false;
      if (i === currentIndex) sel = true;
      c.push(<ListCard key={i} node={list.showAtIndex(i)} index={i} sel={sel} />);
    }
    // console.log('use Effect main', c);
    setCards(c);
  }, [list, currentIndex]);

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

  const handleNavHead = () => {
    setCurrentIndex(0);
  };

  const handleNavPrev = () => {
    // if (!list.size) return;
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const handleNavNext = () => {
    // if (!list.size) return;
    if (currentIndex === list.size - 1) return;
    setCurrentIndex(currentIndex + 1);
  };
  const handleNavTail = () => {
    if (!list.size) return;
    setCurrentIndex(list.size - 1);
  };

  // console.log('Render!', cards);
  // if (list.size) {
  //   const sub = list.showAtIndex(currentIndex).subject;
  //   const amnt = list.showAtIndex(currentIndex).amount;

  // }

  return (
    <div>
      <div className="wrapper">
        <ListSideBar />
        <div className="main-panel">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-brand">Check out this list!</div>
              <div className="text-muted">They're made with React Hooks</div>
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
                  <p className="text-muted text-left">Index {currentIndex}</p>
                  <div className="card ">
                    <div className="card-body">
                      <div className="text-nowrap text-center">
                        <div id="idListItem">
                          {currentCard}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-success btn-fill p-2"
                    onClick={handleNavHead}
                  >
                    <i className="nc-icon nc-stre-left" />
                    <i className="nc-icon nc-stre-left" />
                    &nbsp;
                    Head
                  </button>
                  <button
                    type="button"
                    className="btn btn-success btn-fill m-1 p-2"
                    onClick={handleNavPrev}
                  >
                    <i className="nc-icon nc-stre-left" />
                    &nbsp;
                    Previous
                  </button>
                  <button
                    type="button"
                    className="btn  btn-success btn-fill p-2"
                    onClick={handleNavNext}
                  >
                    Next
                    &nbsp;
                    <i className="nc-icon nc-stre-right" />
                  </button>
                  <button
                    type="button"
                    className="btn  btn-success btn-fill m-1 p-2"
                    onClick={handleNavTail}

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
