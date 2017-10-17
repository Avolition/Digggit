// import package deps
import React, { Component } from 'react'
// import components
import PostMin from './PostMin'

class Posts extends Component {
  render() {
    return (
      <ul className='posts'>

        <PostMin />
        <PostMin />
        <PostMin />
        <PostMin />
        <PostMin />
        <PostMin />
        <PostMin />
      </ul>
    )
  }
}

export default Posts;