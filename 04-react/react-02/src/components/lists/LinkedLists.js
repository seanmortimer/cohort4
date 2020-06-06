import React, { useState, useEffect } from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/light-bootstrap-dashboard.css';
import '../../assets/css/lists.css';
// import animals from '../../assets/data/animals.json';
import ListSideBar from './LinkedListSideBar';
import ListCard from './ListCard';
import ListNav from './LinkedListNav';
import ListInsert from './LinkedListInsert';
import LinkedList from './LinkedListLogic';

const demoData = [['Ant', 10], ['Bat', 20], ['Cat', 30], ['Dog', 40]];

function Lists() {
  // const [list, setList] = useState(new LinkedList()); //  TODO: Is this neccessary???
  const [size, setSize] = useState(0);
  const [cards, setCards] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  let emptyCard = null;
  const list = new LinkedList();
  // console.log('list.size :>> ', list.size);
  // const currentNode = list.size ? list.showAtIndex(currentIndex) : { subject: '', amount: '' };

  const handleCardClick = (node) => {
    setCurrentNode(node);
  };

  function createCards() {
    if (list.size) {
      const cardArray = [];
      let curNode = list.head;
      let key = 1;
      while (curNode.forwardNode) {
        let sel = false;
        console.log('curNode.show() :>> ', curNode.show());
        console.log('currentNode.show() :>> ', list.currentNode.show());
        if (curNode === list.currentNode) sel = true;
        cardArray.push(<ListCard
          key={key}
          node={curNode}
          sel={sel}
          onCardClick={handleCardClick}
        />);
        key++;
        curNode = curNode.forwardNode;
      }
      console.log('CARDS', cardArray);
      setCards(cardArray);
    }
  }

  // useEffect(() => {
  //   if (list.size) {
  //     const cardArray = [];
  //     let curNode = list.head;
  //     let key = 1;
  //     while (curNode.forwardNode) {
  //       let sel = false;
  //       if (curNode === currentNode) sel = true;
  //       cardArray.push(<ListCard
  //         key={key}
  //         node={curNode}
  //         sel={sel}
  //         onCardClick={handleCardClick}
  //       />);
  //       key++;
  //       curNode = curNode.forwardNode;
  //     }
  //     console.log('CARDS', cardArray);
  //     setCards(cardArray);
  //   }
  // }, [list.head, currentNode, list.size]);


  // Add demo data on first load
  function demoList() {
    demoData.forEach((value) => list.insertAfterCurrent(value[0], value[1]));
    // // console.log('list.tail.show() :>> ', list.tail.show());
    // console.log('list.tail.show() :>> ', list.tail.show());
    // console.log('list.size :>> ', list.size);
    list.jumpToHead();
    setSize(list.size);
    setCurrentNode(list.currentNode);
    createCards();
    // console.log('list.size :>> ', size);
  }

  useEffect(demoList, []);

  // function handleIndexChange(index) {
  //   // console.log('index :>> ', index);
  //   // console.log('list.size :>> ', list.size);
  //   if (!list.size || index >= list.size) return;
  //   if (index === -1) setCurrentNode(list.size - 1);
  //   else setCurrentNode(index);
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
  function handleNav(nav) {
    console.log('lets nav!', nav);
  }

  const handleInsert = (positon, sub, amnt) => {
    switch (positon) {
      // if (!size) setCurrentIndex(0)
      case 'head':
        list.insertAtHead(sub, amnt);
        setCurrentNode(list.head);
        setSize(list.size);
        break;
      case 'tail':
        list.insertAtTail(sub, amnt);
        setCurrentNode(list.tail);
        setSize(list.size);
        break;
      case 'here':
        list.insertAfterCurrent(sub, amnt);
        setCurrentNode(list.currentNode);
        setSize(list.size);
        break;
      default:
        break;
    }
  };

  const handleDelete = () => {
    if (!size) return;
    list.deleteCurrent();
    setCurrentNode(list.currentNode);
    setSize(list.size);
  };

  console.log('size  125:>> ', size);
  // console.log('cards 126:>> ', cards);

  if (!size) emptyCard = <div>Where&apos;d the list go?</div>;
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
                  <ListNav
                    onNav={handleNav}
                    // index={currentNode}
                    // list={list}
                    currentNode={list.currentNode}
                    total={list.total()}
                  />
                </div>
                <div className="col-sm">
                  <div className="card-deck" id="idListCardDeck">
                    {cards}
                    {emptyCard}
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
