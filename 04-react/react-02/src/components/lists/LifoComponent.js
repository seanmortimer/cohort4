import React from 'react';
import ListCard from './ListCard';


function LifoComponent({ stack }) {


  return (
    <div>
      <h3 className="mt-1 mb-3">Stack</h3>
      <div className="card-deck clDivider" id="idCardDeck">
        <div className="card"> HERE THERE BE CARDS</div>
        {stack.head?.show()}
        {stack.size ? null : <h4>Add some data!</h4>}
      </div>
    </div>
  );
}

export default LifoComponent;
