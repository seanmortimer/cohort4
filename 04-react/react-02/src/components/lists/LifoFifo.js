import React, { useState, useEffect } from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/light-bootstrap-dashboard.css';
import '../../assets/css/lists.css';
import LifoSideBar from './LifoSideBar';
// import ListCard from './ListCard';
// import ListNav from './ListNav';
// import ListInsert from './ListInsert';
import LinkedList from './LinkedListLogic';

const demoData = [['Bat', 10], ['Dog', 20], ['Koala', 30], ['Panda', 40]];

function LifoFifo() {
  // useEffect(() => {
  //   //   // console.log('CARDS', currentIndex);
  //   const c = [];
  //   for (let i = 0; i < list.size; i++) {
  //     let sel = false;
  //     if (i === currentIndex) sel = true;
  //     c.push(<ListCard
  //       key={i}
  //       node={list.showAtIndex(i)}
  //       index={i}
  //       sel={sel}
  //       onClick={handleCardClick}
  //     />);
  //   }
  //   setCards(c);
  // }, [currentIndex, size, list]);

  // Add demo data on first load
  // function demoList() {
  //   // console.log('list');
  //   demoData.forEach((value) => list.insertLast(value[0], value[1]));
  //   setSize(list.size);
  // createCards();
  // setCurrentIndex(1);
  // }

  // useEffect(demoList, []);

  // function handleIndexChange(index) {
  //   // console.log('index :>> ', index);
  //   // console.log('list.size :>> ', list.size);
  //   if (!list.size || index >= list.size) return;
  //   if (index === -1) setCurrentIndex(list.size - 1);
  //   else setCurrentIndex(index);
  //   setSize(list.size);
  // }


  // useEffect(() => {
  //   const c = [];
  //   for (let i = 0; i < list.size; i++) {
  //     // console.log('list.showAtIndex(i) :>> ', list.showAtIndex(i));
  //     let sel = false;
  //     if (i === currentIndex) sel = true;
  //     c.push(<ListCard key={i} node={list.showAtIndex(i)} index={i} sel={sel} />);
  //   }
  //   // console.log('use Effect main', c);
  //   setCards(c);
  // }, [list, currentIndex]);

  // console.log('size :>> ', size);
  // for (let i = 0; i < list.size; i++) {
  //   let sel = false;
  //   if (i === currentIndex) sel = true;
  //   cards.push(<ListCard key={i} node={list.showAtIndex(i)} index={i} sel={sel} />);
  // }


  // const handleInsert = (positon, sub, amnt) => {
  //   switch (positon) {
  //     // if (!size) setCurrentIndex(0)
  //     case 'head':
  //       list.insertFirst(sub, amnt);
  //       setCurrentIndex(0);
  //       setSize(list.size);
  //       break;
  //     case 'tail':
  //       list.insertLast(sub, amnt);
  //       setSize(list.size);
  //       setCurrentIndex(list.size - 1);
  //       break;
  //     case 'here':
  //       list.insert(sub, amnt, currentIndex);
  //       setSize(list.size);
  //       break;
  //     default:
  //       break;
  //   }
  //   // console.log('positon, sub, amnt :>> ', positon, sub, amnt);
  //   // list.insertFirst(subj, amnt);
  //   // setList(list);
  // };

  // const handleDelete = () => {
  //   if (!size) return;
  //   list.deleteAtIndex(currentIndex);
  //   setSize(list.size);
  //   if (currentIndex === list.size && list.size > 0) setCurrentIndex(list.size - 1);
  // };

  // console.log('list.total() :>> ', list.total());
  // if (cards) console.log('Cards!');
  // if (!size) emptyCard = <div>Where&apos;d the list go?</div>;
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
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <div className="card-deck" id="idCardDeck">
                    <div className="card"> HERE THERE BE CARDS</div>
                  </div>
                </div>
                <div className="col-sm">
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
