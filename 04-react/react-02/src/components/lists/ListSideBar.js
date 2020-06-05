import React from 'react';


function ListSideBar() {
  return (
    <div className="sidebar" id="idSideBar" data-image="../assets/img/sidebar-5.jpg" data-color="blue">
      <div className="sidebar-wrapper">
        <div className="logo">
          <div className="simple-text">Linked Lists</div>
        </div>
        <p className="p-3 text-left">
          A linked list is a series of items where each element points to the next element
          (single linked list) or the elements before and after itself (doubly linked list).
        </p>
        <p className="p-3 text-left">
          An advantage over arrays is that the elements don&apos;t need to be stored contigously in
          memory, allowing more flexibility, especially if the size of the list isn&apos;t
          known in advance.
        </p>
        <p className="p-3 text-left">
          On the flip side, because the list must be navigated sequentially,
          searches can be quite slow.
        </p>
      </div>
    </div>
  );
}


export default ListSideBar;
