import React from 'react';


function LifoCard({ node }) {
  const [subject, amount] = node.show();

  return (
    <div className="card mw-100 mb-2 clListCard">
      <div className="card-body">
        <div>{subject}, ${amount}
        </div>
      </div>
    </div>
  );
}

export default LifoCard;
