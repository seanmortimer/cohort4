import React, { useState, useEffect } from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/light-bootstrap-dashboard.css';
import '../../assets/css/lists.css';
// import animals from '../../assets/data/animals.json';
import ListSideBar from './ListSideBar';
import ListCard from './ListCard';
import LinkedList from './listLogic';
import ListNav from './ListNav';
import ListInsert from './ListInsert';

const demoData = [['Bat', 10], ['Dog', 20], ['Koala', 30], ['Panda', 40]];

function Lists() {
  const [list, setList] = useState(new LinkedList()); //  TODO: Is this neccessary???
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = list.size ? list.showAtIndex(currentIndex).show() : ['', ''];

  // Add demo data on first load
  function demoList() {
    demoData.forEach((value) => list.insertLast(value[0], value[1]));
  }

  // function updateCard() {
  //   if (!list.size) setCurrentCard('');
  //   else {
  //     const sub = list.showAtIndex(currentIndex).subject;
  //     const a = list.showAtIndex(currentIndex).amount;
  //     const card = `Subject: ${sub} ${'     '} Amount: $${a}`;
  //     setCurrentCard(card);
  //   }
  // }

  useEffect(demoList, []);
  // useEffect(updateCard, [currentIndex]);

  function handleIndexChange(index) {
    if (!list.size || index === currentIndex || index >= list.size) return;
    if (index === -1) setCurrentIndex(list.size - 1);
    else setCurrentIndex(index);
  }

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

  const handleInsert = (positon, sub, amnt) => {
    console.log('positon, sub, amnt :>> ', positon, sub, amnt);
    // list.insertFirst(subj, amnt);
    // setList(list);
  };

  const handleDelete = () => {
    console.log('delete this :>> ', currentIndex);
  };

  return (
    <div>
      <div className="wrapper">
        <ListSideBar />
        <div className="main-panel">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-brand">Check out this list!</div>
              <div className="text-muted">Made using React Hooks</div>
            </div>
          </nav>
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-sm" id="idCtrlPanel">
                  <ListInsert onInsert={handleInsert} onDelete={handleDelete} />
                  <ListNav onIndexChange={handleIndexChange} index={currentIndex} data={data} />
                </div>
                <div className="col-sm">
                  <div className="card-deck" id="idCardDeck">
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
