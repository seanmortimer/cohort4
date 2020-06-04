import React from 'react';


function ListCard(props) {
  const { index, node, sel } = props;
  const [subject, amount] = node.show();
  const nextNode = node.forwardNode || { subject: 'null', amount: '' };

  const active = sel ? 'card border-primary clActiveCard' : 'card';

  return (
    <div className={active}>
      <div className="card-body">
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
