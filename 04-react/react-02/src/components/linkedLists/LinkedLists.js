import React, { useState, useEffect } from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/light-bootstrap-dashboard.css';
import '../../assets/css/lists.css';
// import animals from '../../assets/data/animals.json';
import ListSideBar from './LinkedListSideBar';
import ListCard from './LinkedListCard';
import ListNav from './LinkedListNav';
import ListInsert from './LinkedListInsert';
// import LinkedList from './linkedListLogic';

const demoData = [['Ant', 10], ['Bat', 20], ['Cat', 30], ['Dog', 40]];


// const list = new LinkedList();

// console.log('List is imported :>> ', list);

function Lists(props) {
  const { list } = props;
  // console.log('Render the page :>> ', list);
  // list is useless in state because it's an object
  // it gets copied by reference so list always === list
  // const [list, setList] = useState(new LinkedList());
  const [size, setSize] = useState(0);
  const [currentNode, setCurrentNode] = useState(null);
  const cards = [];
  // console.log('list.size :>> ', list.size);
  // const currentNode = list.size ? list.showAtIndex(currentIndex) : { subject: '', amount: '' };

  const handleCardClick = (node) => {
    list.currentNode = node;
    setCurrentNode(node);
  };

  // Add demo data on first load
  function demoList() {
    // console.log('Create the demo list');
    demoData.forEach((value) => list.insertAfterCurrent(value[0], value[1]));
    list.jumpToHead();
    setCurrentNode(list.currentNode);
    setSize(list.size);
    // setList(list);
  }

  useEffect(demoList, []);

  function handleNav(nav) {
    // console.log('list size :>> ', list.size);
    // console.log('head :>> ', list.head.show());
    // console.log('head + 1:>> ', list.head.forwardNode.show());
    // console.log('head + 2:>> ', list.head.forwardNode.forwardNode.show());
    // console.log('head + 3:>> ', list.head.forwardNode.forwardNode.forwardNode);
    // console.log('lets nav!', nav);
    switch (nav) {
      case 'head':
        list.jumpToHead();
        setCurrentNode(list.currentNode);
        break;
      case 'next':
        list.stepForward();
        setCurrentNode(list.currentNode);
        break;
      case 'prev':
        list.stepBackward();
        setCurrentNode(list.currentNode);
        break;
      case 'tail':
        list.jumpToTail();
        setCurrentNode(list.currentNode);
        break;
      // no default
    }
    // console.log('list.currentNode after :>> ', list.currentNode.show());
  }

  const handleInsert = (positon, sub, amnt) => {
    switch (positon) {
      case 'head':
        list.insertAtHead(sub, amnt);
        setCurrentNode(list.currentNode);
        setSize(list.size);
        break;
      case 'tail':
        list.insertAtTail(sub, amnt);
        setCurrentNode(list.currentNode);
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
    if (!list.head) return;
    list.deleteCurrent();
    setCurrentNode(list.currentNode);
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
      // console.log('curNode.subject :>> ', curNode.subject);
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
  }

  // console.log('list a1:>> ', list.head);
  // console.log('list a2:>> ', list.head?.forwardNode);
  // console.log('list a2:>> ', list.head?.forwardNode.forwardNode);

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
                <div className="col-sm clDivider">
                  <ListInsert onInsert={handleInsert} onDelete={handleDelete} />
                  <ListNav
                    onNav={handleNav}
                    currentNode={currentNode}
                    total={list.total()}
                  />
                </div>
                <div className="col-sm">
                  <div className="card-deck" id="idListCardDeck">
                    {cards}
                    {size ? null : <div>Where&apos;d the list go?</div>}
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
