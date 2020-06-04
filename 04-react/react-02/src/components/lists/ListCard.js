import React from 'react';


function ListCard(props) {
  const { index, node } = props;
  const [subject, amount] = node.show();
  const nextNode = node.forwardNode || { subject: 'null', amount: '' };

  return (
    <div className="card ">
      <div className="card-body">
        <div className="text-nowrap">
          <div>Index {index}: {subject}, ${amount}
            &nbsp;&gt;&gt; Next item: {nextNode.subject || 'null'}
            {nextNode.amount ? `, $${nextNode.amount}` : '' }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
