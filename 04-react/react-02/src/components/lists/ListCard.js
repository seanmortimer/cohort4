/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';


function ListCard({ node, sel, onCardClick }) {
  const [subject, amount] = node.show();
  const nextNode = node.forwardNode || { subject: 'null', amount: '' };

  const active = sel
    ? 'card mw-100 mb-2 clListCard border-primary clActiveCard'
    : 'card mw-100 mb-2 clListCard';

  return (
    <div className={active}>
      <div className="card-body" onClick={() => onCardClick(node)}>
        {/* <div className="text-nowrap"> */}
        <div className="">
          <div>{subject}, ${amount}
            &nbsp;&gt;&gt; Next item: {nextNode.subject || 'null'}
            {nextNode.amount ? `, $${nextNode.amount}` : ''}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
