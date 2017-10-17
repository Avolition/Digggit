// import package deps
import React, { Component } from 'react';
// import components
// import icons
import { FaArrowCircleOUp, FaArrowCircleUp, FaComments } from 'react-icons/lib/fa'

class PostMin extends Component {
  render() {
    return (
      <li className='post'>
        <div>
          <span>1</span>
          <span><FaArrowCircleOUp/></span>
          <span>TITLE OF POST</span>
        </div>
        <div>
        <span><FaComments/></span><span className='commentNumber'>10</span><span></span>
          <span>TITLE OF POST</span>
        </div>
      </li>
    )
  }
}

export default PostMin;