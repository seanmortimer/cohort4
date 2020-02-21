import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FuncComp from './components/FuncComp';
import ClassComp from './components/ClassComp';

const arr = ['one', 'two', 'three', 'four'];

function App() {

  const [count, setCount] = useState(0);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [fullName, setFullName] = useState("");
  const [showData, setShowData] = useState("None");

  const onMoreData = ((e) => {
    setShowData((showData === "None") ? "Special" : "None");
  })

  const onCountClick = ((e) => {
    setCount(count + 1)
  })

  const onDoStuff = ((e) => {
    setFullName(fName + " @ " + lName);
    console.log("onDoStuff", fName, lName, fullName);
    // idFullName.value = fullName;

    // setCount(count + 1)
  })

  const obj = {fname:"Larry", lname:"Shumlich"};

  const listOfStuff = arr.map((stuff) => 
    // <li>{stuff}</li>
    <FuncComp stuff={stuff} callback={onDoStuff}/>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="##"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter Data
        </a>
        <span className="App-link" onClick={onMoreData}>More Data</span>

      </header>
      <div id="importantId" className="app-data">
        Some stuff to say.
      ({showData})
      </div>
      <div>
        <p>You clicked <span id="idCount">{count}</span> times</p>
        <button id="idOnCount" onClick={onCountClick}>Add Counter</button> <p />

        <label htmlFor="idFName">First Name</label>
        <input id="idFName" value={fName} onChange={e => setFName(e.target.value)}/><p />

        <label htmlFor="idLName">Last Name</label>
        <input id="idLName" value={lName} onChange={e => setLName(e.target.value)}/><p />
        <input id="idFullName" value={fullName} /><p />

        <button id="idOnDoStuff" onClick={onDoStuff}>Do Stuff</button> <p />
        <span id="idFullName"/> <p />
        {fullName} <p/>
      </div>
      <FuncComp stuff={obj} callback={onDoStuff}/>
      <ClassComp stuff="WhatEver" callback={onDoStuff}/>

      {listOfStuff}

    </div>
  );
}

export default App;
