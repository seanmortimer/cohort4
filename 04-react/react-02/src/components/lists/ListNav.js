import React from 'react';


function ListNav({ index, list, onIndexChange }) {
  let subject = null;
  let amount = null;
  let total = null;
  let card = null;

  // console.log('list.total() in nav :>> ', list.total());

  // if (!list.size) console.log('There is no list');
  if (list?.size) {
    [subject, amount] = list.showAtIndex(index).show();
    card = `Subject: ${subject}, Amount: $${amount}`;
    total = list.total();
    // console.log('List exists!', total);
  }

  const handleNavHead = () => {
    onIndexChange(0);
  };

  const handleNavPrev = () => {
    if (index === 0) return;
    onIndexChange(index - 1);
  };

  const handleNavNext = () => {
    onIndexChange(index + 1);
  };
  const handleNavTail = () => {
    onIndexChange(-1);
  };


  return (
    <div>
      <h4>Current item:</h4>
      <p className="text-muted text-left">
        Index {index}
        <span className="float-right">Current total: ${total}</span>
      </p>
      <div className="card ">
        <div className="card-body">
          <div className="text-nowrap text-center">
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
