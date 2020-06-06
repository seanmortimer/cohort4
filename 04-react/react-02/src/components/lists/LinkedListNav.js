import React from 'react';


function ListNav({ currentNode, total, onNav }) {
  let card = null;

  if (currentNode) {
    const [subject, amount] = currentNode.show();
    card = `Subject: ${subject}, Amount: $${amount}`;
  }

  const handleNavHead = () => {
    onNav('head');
  };

  const handleNavPrev = () => {
    onNav('prev');
  };

  const handleNavNext = () => {
    onNav('next');
  };
  const handleNavTail = () => {
    onNav('tail');
  };


  return (
    <div>
      <h4>Current item:</h4>
      <p className="text-muted text-left">
        Current total: ${total}
      </p>
      <div className="card mw-100">
        <div className="card-body">
          <div className="text-center">
            <div id="idListItem">
              {card}
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-success btn-fill p-2"
        onClick={handleNavHead}
      >
        <i className="nc-icon nc-stre-left" />
        <i className="nc-icon nc-stre-left" />
        &nbsp;
        Head
      </button>
      <button
        type="button"
        className="btn btn-success btn-fill m-1 p-2"
        onClick={handleNavPrev}
      >
        <i className="nc-icon nc-stre-left" />
        &nbsp;
        Previous
      </button>
      <button
        type="button"
        className="btn  btn-success btn-fill p-2"
        onClick={handleNavNext}
      >
        Next
        &nbsp;
        <i className="nc-icon nc-stre-right" />
      </button>
      <button
        type="button"
        className="btn  btn-success btn-fill m-1 p-2"
        onClick={handleNavTail}

      >
        Tail
        &nbsp;
        <i className="nc-icon nc-stre-right" />
        <i className="nc-icon nc-stre-right" />
      </button>
    </div>
  );
}

export default ListNav;
