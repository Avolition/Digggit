// import package deps
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
// import icons
import { FaArrowCircleUp } from 'react-icons/lib/fa'
//import action creators
import { upVoteComment, downVoteComment } from '../redux/actions/comments'
// import helper files
import { _fetch } from '../js/DiggitAPI'

class Comment extends Component {

    state = {
      voted: false
    }

  _handleCommentVote = (id, options = {}) => {
    if (!this.state.voted) {
      this.setState({ voted: true })
      options.body = JSON.stringify({ 'option': 'upVote' })
      return _fetch(`comments/${id}`, 'POST', options)
        .then(res => {
          this.props.dispatch(upVoteComment(res))
        })
    } else {
      this.setState({ voted: false })
      options.body = JSON.stringify({ 'option': 'downVote' })
      return _fetch(`comments/${id}`, 'POST', options)
        .then(res => {
          this.props.dispatch(downVoteComment(res))
        })
    }
  }

  render() {
    
    const { post, comment } = this.props

    return (
      <li className='comment'>
        <div className='rank-vote'>
          <span onClick={() => this._handleCommentVote(comment.id)} className='vote'>
            {this.state.voted
              ? <FaArrowCircleUp color="dodgerblue" />
              : <FaArrowCircleUp />
            }
          </span>
          <span className='score'>{comment.voteScore}</span>
        </div>
        <div className='comment-all'>
          <span className='comment-body'>{comment.body}</span>
          <span className='time'> Submitted {moment(comment.timestamp).fromNow()} by {comment.author}</span>
        </div>
        <div>
          <Link to={`/${post.category}/${post.id}/${comment.id}`}><button>Edit</button></Link>
        </div>
      </li>
    )
  }
} // component class

const mapStateToProps = (state, ownProps) => {
  return { 
    comment: ownProps.comment,
    post: ownProps.post
  }
}

export default connect(mapStateToProps)(Comment);