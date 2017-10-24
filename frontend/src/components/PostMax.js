// import package deps
import React, { Component } from 'react'
// import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import moment from 'moment'
// import components
import PostMin from './PostMin'
import Loader from 'react-loader'
// import Comments from './Comments'
// import action creators
// import { updatePost } from '../redux/actions/posts'
// import { loadComments } from '../redux/actions/comments'
// import icons
// import { FaArrowCircleOUp, FaArrowCircleUp, FaComments } from 'react-icons/lib/fa'
// import helpers
// import { _fetch } from '../js/DiggitAPI'

class PostMax extends Component {

  state = {
    voted: false,
    loader: true
  }

  // _getPost = (id) => {
  //   _fetch(`post/${id}`, 'GET'
  //   ).then(res => {
  //     console.log(res)
  //   }).catch(err => console.log('error retrieving post: ', err))
  // }

  render() {

    const { post } = this.props

    return ( 
      <article className='single-view'>
      {post && post.id
        ? <div className='single-view'>
            <ul className='posts'>
              <PostMin post={post} />
            </ul>
            <div className='post-body'>
              <p>{post.body}</p>
            </div>
          </div>
        : <Loader color="#FFF" />
      }
      </article>
    )
  } // render
} // Component

const mapStateToProps = (state, ownProps) => {

  const { posts, comments } = state
  const postId = ownProps.match.params.post_id
  const post = posts[postId]
  let postComments = []
  Object.keys(comments).forEach(key => {
    if (comments[key].parentId === postId) postComments.push(comments[key])
  })

  // sort based on user selected method
  const { sortBy } = ownProps
  const sortedComments = sortBy === 'voteScore'
    ? postComments.sort((a, b) => b[sortBy] - a[sortBy])
    : postComments.sort((a, b) => a[sortBy] - b[sortBy])

  return {
    post,
    comments: sortedComments
  }
  
    
} // mapStateToProps

export default connect(mapStateToProps)(PostMax)