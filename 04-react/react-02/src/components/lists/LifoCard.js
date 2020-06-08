import React from 'react';


function LifoCard({ node }) {
  const [subject, amount] = node.show();
  // const nextNode = node.forwardNode || { subject: 'null', amount: '' };

  const active = true
    ? 'card mw-100 mb-2 clListCard border-primary clActiveCard'
    : 'card mw-100 mb-2 clListCard';

  return (
    <div className={active}>
      <div className="card-body">
        <div>{subject}, ${amount}
        </div>
      </div>
    </div>
  );
}

export default LifoCard;
