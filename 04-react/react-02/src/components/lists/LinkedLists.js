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
const list = new LinkedList();

function Lists() {
  // list is useless in state because it's an object
  // it gets copied by reference so list always === list
  // const [list, setList] = useState(new LinkedList()); //  TODO: Is this neccessary???
  const [size, setSize] = useState(0);
  // const [cards, setCards] = useState([]);
  // const [currentNode, setCurrentNode] = useState(null);
  let emptyCard = null;
  // console.log('what\'s the list??? 21:>> ', list.head);
  // const list = new LinkedList();
  const cards = [];
  // console.log('list.size :>> ', list.size);
  // const currentNode = list.size ? list.showAtIndex(currentIndex) : { subject: '', amount: '' };

  const handleCardClick = (node) => {
    // console.log('Card got clicked', node.show());
    // setCurrentNode(node);
  };

  // Add demo data on first load
  function demoList() {
    // console.log('Create the demo list 33');
    demoData.forEach((value) => list.insertAfterCurrent(value[0], value[1]));
    list.jumpToHead();
    setSize(list.size);
    // setList(list);
    // console.log('demo list current node :>> ', list.currentNode);
    // setCurrentNode(list.currentNode);
  }

  useEffect(demoList, []);

  function handleNav(nav) {
    console.log('lets nav!', nav);
  }

  const handleInsert = (positon, sub, amnt) => {
    // const cl = list.head;
    // console.log('cl :>> ', cl);
    switch (positon) {
      // if (!size) setCurrentIndex(0)
      case 'head':
        list.insertAtHead(sub, amnt);
        // console.log('list :>> ', list.currentNode);
        // console.log('(cl === list) :>> ', (cl === list.currentNode));
        // setList(list);
        // setCurrentNode(list.head);
        setSize(list.size);
        break;
      case 'tail':
        list.insertAtTail(sub, amnt);
        // setList(list);
        // setCurrentNode(list.tail);
        setSize(list.size);
        break;
      case 'here':
        list.insertAfterCurrent(sub, amnt);
        // setCurrentNode(list.currentNode);
        // setList(list);
        setSize(list.size);
        break;
      default:
        break;
    }
  };

  const handleDelete = () => {
    if (!list.head) return;
    list.deleteCurrent();
    // setList(list);
    setSize(list.size);
  };

  // console.log('size  82:>> ', size);
  // console.log('cards 126:>> ', cards);
  // console.log('list.currentNode 84 :>> ', list.currentNode);
  // console.log('list.head 85 :>> ', list.head?.show());

  if (size) {
    // console.log('we have a list 86 :>> ', list.currentNode);
    let curNode = list.head;
    let key = 1;
    while (curNode) {
      let sel = false;
      // console.log('curNode.show() :>> ', curNode.show());
      // console.log('currentNode.show() :>> ', list.currentNode.show());
      if (curNode === list.currentNode) sel = true;
      cards.push(<ListCard
        key={key}
        node={curNode}
        sel={sel}
        onCardClick={handleCardClick}
      />);
      key++;
      curNode = curNode.forwardNode;
      // console.log('Here are the cards 104 :>> ', cards);
    }
    // console.log('CARDS', cardArray);
    // setCards(cardArray);
  } else emptyCard = <div>Where&apos;d the list go?</div>;


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
