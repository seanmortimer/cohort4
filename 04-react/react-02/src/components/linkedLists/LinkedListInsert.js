import React, { useState } from 'react';
import animals from '../../assets/data/animals.json';


function ListInsert(props) {
  const [subject, setSubjext] = useState('');
  const [amount, setAmount] = useState('');
  // const [disable, setDisable] = useState(true);
  let disable = true;

  const handleSubjectChange = (e) => {
    // console.log('e.target :>> ', e.target.value);
    setSubjext(e.target.value);
  };

  const handleAmountChange = (e) => {
    const a = e.target.value;
    if (!a.match(/^[0-9.]+$/)) return;
    // console.log('e.target :>> ', e.target.value);
    setAmount(a);
  };

  const handleInsertHere = () => {
    if (!subject || !amount) return;
    props.onInsert('here', subject, Number(amount));
    setSubjext('');
    setAmount('');
  };

  const handleInsertHead = () => {
    if (!subject || !amount) return;
    props.onInsert('head', subject, Number(amount));
    setSubjext('');
    setAmount('');
  };

  const handleInsertTail = () => {
    if (!subject || !amount) return;
    props.onInsert('tail', subject, Number(amount));
    setSubjext('');
    setAmount('');
  };

  const handleInsertRandom = () => {
    const i = Math.floor(Math.random() * animals.length);
    const subj = animals[i];
    const amnt = Math.ceil(Math.random() * 10) * 10;
    props.onInsert('here', subj, amnt);
  };

  const handleDelete = () => {
    props.onDelete();
  };

  if (subject && amount) disable = false;

  return (
    <div>
      <h4>Linked List</h4>
      <form className="form-group">
        <label className="mt-3" htmlFor="subject">Subject:
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="Subject"
            value={subject}
            onChange={handleSubjectChange}
            autoComplete="off"
          />
        </label>
        <label className="mt-1 mb-3" htmlFor="amount">Amount:
          <input
            type="text"
            className="form-control"
            name="amount"
            placeholder="Amount"
            value={amount}
            onChange={handleAmountChange}
            autoComplete="off"
          />
        </label>
        <div>
          <button
            type="button"
            className="btn btn-sm btn-success btn-fill m-1"
            onClick={handleInsertHead}
            disabled={disable}
          >
            Insert at head
          </button>
          <button
            type="button"
            className="btn btn-sm btn-success btn-fill m-1"
            onClick={handleInsertHere}
            disabled={disable}
          >
            Insert at current
          </button>
          <button
            type="button"
            className="btn  btn-sm btn-success btn-fill m-1"
            onClick={handleInsertTail}
            disabled={disable}
          >
            Insert at tail
          </button>
          <br />
          <button
            type="button"
            className="btn btn-sm btn-success btn-fill m-1"
            onClick={handleInsertRandom}
          >
            Insert random
          </button>
          <button
            type="button"
            className="btn btn-sm btn-danger btn-fill m-1"
            onClick={handleDelete}
          >
            Delete current
          </button>
        </div>
      </form>
    </div>
  );
}

export default ListInsert;
