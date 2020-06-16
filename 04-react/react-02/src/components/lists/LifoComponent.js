import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LifoCard from './LifoCard';

function LifoComponent({ stack }) {
  const cards = [];

  if (stack.size) {
    let curNode = stack.head;
    let key = 1;
    while (curNode) {
      cards.push(
        <CSSTransition key={key} timeout={800} classNames="cl-Lifo-Cards">
          <LifoCard node={curNode} />
        </CSSTransition>,
      );
      key++;
      curNode = curNode.forwardNode;
    }
  }

  return (
    <div>
      <h3 className="mt-1 mb-3">Stack</h3>
      <div className="clDivider justify-content-center">
        {/* <div> */}
        <TransitionGroup className="cl-lifo">
          {cards.reverse()}
        </TransitionGroup>
        {/* </div> */}
        {stack.size ? null : <h4>Add some data!</h4>}
      </div>
    </div>
  );
}

export default LifoComponent;
