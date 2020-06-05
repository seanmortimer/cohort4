/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';


function ListCard(props) {
  const { index, node, sel } = props;
  const [subject, amount] = node.show();
  const nextNode = node.forwardNode || { subject: 'null', amount: '' };

  const active = sel ? 'card border-primary clActiveCard' : 'card';

  return (
    <div className={active}>
      <div className="card-body" onClick={() => props.onClick(index)}>
        <div className="text-nowrap">
          <div>Index {index}: {subject}, ${amount}
            &nbsp;&gt;&gt; Next item: {nextNode.subject || 'null'}
            {nextNode.amount ? `, $${nextNode.amount}` : ''}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
