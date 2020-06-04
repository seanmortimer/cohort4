import React from 'react';


function ListNav({ index, data, onIndexChange }) {
  // const [index, setindex] = useState(0);
  // const [currentCard, setCurrentCard] = useState('');
  const [subject, amount] = data;
  const card = `Subject: ${subject} Amount: $${amount}`;


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
      <p className="text-muted text-left">Index {index}</p>
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
