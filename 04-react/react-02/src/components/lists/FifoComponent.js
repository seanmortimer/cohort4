import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LifoCard from './LifoCard';


function FifoComponent({ queue }) {
  const cards = [];

  if (queue.size) {
    let curNode = queue.head;
    // let key = 1;
    while (curNode) {
      cards.push(
        <CSSTransition key={curNode.subject + curNode.amount} timeout={800} classNames="cl-Lifo-Cards">
          <LifoCard
            node={curNode}
          />
        </CSSTransition>,
      );
      // key++;
      curNode = curNode.forwardNode;
    }
  }

  return (
    <div>
      <h3 className="mt-1 mb-3">Queue</h3>
      <div className="justify-content-center">
        <TransitionGroup className="cl-lifo">
          {cards}
        </TransitionGroup>
        {queue.size ? null : <h4>Add some data!</h4>}
      </div>
    </div>
  );
}

export default FifoComponent;
