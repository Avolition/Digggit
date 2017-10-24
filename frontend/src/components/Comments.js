// import package deps
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import components
import Comment from './Comment'

class Comments extends Component {

  state = {
    editing: false
  }

  render() {
    
    const { post, comments } = this.props
    const allComments = comments.map((comment, i) => {
        return (
          <Comment key={i} comment={comment} post={post}/>
        )
    })

    return (
      <ul className='comments'>
        {allComments}
      </ul>
    )
  }
} // component class

const mapStateToProps = (state, ownProps) => {

  const { posts, comments, sortBy } = state
  const { postId } = ownProps
  const post = posts[postId]
  let postComments = []
  Object.keys(comments).forEach(key => {
    if (comments[key].parentId === postId) postComments.push(comments[key])
  })

  // sort based on user selected method
  const sortedComments = postComments.sort((a, b) => b[sortBy] - a[sortBy])

  return {
    sortBy,
    post,
    comments: sortedComments
  }
}

export default connect(mapStateToProps)(Comments);