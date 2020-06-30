import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';


function LifoSideBar() {
  const value = useContext(ThemeContext);
  // console.log('value :>> ', value);
  return (
    <div className="sidebar" id="idSideBar" data-image="../assets/img/sidebar-5.jpg" data-color={value.theme.sidebar}>
      <div className="sidebar-wrapper">
        <div className="logo">
          <div className="simple-text">Stacks vs Queues</div>
        </div>
        <p className="p-3 mt-4 text-left">
          A queue adds new items to the end of the list and removes items from the front
          of the list (First in, First out).
          <br />
          Like a queue outside Canadian Tire on a
          Saturday.
        </p>
        <p className="p-3 text-left">
          A stack accepts new items onto the top of the stack and also removes
          items from the top (Last in, First out). Like a stack of books.
        </p>
      </div>
    </div>
  );
}


export default LifoSideBar;
