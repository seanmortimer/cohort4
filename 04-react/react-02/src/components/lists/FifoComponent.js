import React from 'react';
import LifoCard from './LifoCard';


function FifoComponent({ queue }) {
  const cards = [];

  if (queue.size) {
    let curNode = queue.head;
    let key = 1;
    while (curNode) {
      cards.push(<LifoCard
        key={key}
        node={curNode}
      />);
      key++;
      curNode = curNode.forwardNode;
    }
  }

  return (
    <div>
      <h3 className="mt-1 mb-3">Queue</h3>
      <div className="justify-content-center">
        {cards}
        {queue.size ? null : <h4>Add some data!</h4>}
      </div>
    </div>
  );
}

export default FifoComponent;
