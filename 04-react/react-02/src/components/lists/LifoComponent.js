import React from 'react';
import LifoCard from './LifoCard';


function LifoComponent({ stack }) {
  const cards = [];

  if (stack.size) {
    let curNode = stack.head;
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
      <h3 className="mt-1 mb-3">Stack</h3>
      <div className="card-deck clDivider" id="idCardDeck">
        <div className="card"> HERE THERE BE CARDS</div>
        {cards}
        {stack.size ? null : <h4>Add some data!</h4>}
      </div>
    </div>
  );
}

export default LifoComponent;
