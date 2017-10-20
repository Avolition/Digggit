// import package deps
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import components
// import Comments from './Comments'
// import action creators
import { loadPosts } from '../redux/actions/posts'
import { loadComments } from '../redux/actions/comments'
// import helpers
import { _fetch } from '../js/DiggitAPI'

class PostMax extends Component {

  state = {
    loader: true
  }

  // _getPost = (id) => {
  //   _fetch(`post/${id}`, 'GET'
  //   ).then(res => {
  //     console.log(res)
  //   }).catch(err => console.log('error retrieving post: ', err))
  // }

  componentDidMount = () => {

    // const id = this.props.location


  }

  render() {
    return (
      <article className='single-view'>


      </article>
    )
  }
}

function mapStateToProps (state, ownProps) {
  console.log(state.posts, state.comments, ownProps)
  // return posts
    
} // mapStateToProps

export default connect(mapStateToProps)(withRouter(PostMax))