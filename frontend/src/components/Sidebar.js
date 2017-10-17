// import package deps
import React, { Component } from 'react';
// import components

class Sidebar extends Component {
  render() {
    return (
      <aside>
        <ul className='categories'>
          <li className='category'>All</li>
          <li className='category'>category</li>
          <li className='category'>category</li>
          <li className='category'>category</li>
          <li className='category'>category</li>
        </ul>
        <ul class='sortByList'>
          <h6>Sort By</h6>
          <li className='sortByField'>votes</li>
          <li className='sortByField'>time</li>
        </ul>
      </aside>
    )
  }

}

export default Sidebar;