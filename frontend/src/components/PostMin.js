// import package deps
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
// import icons
import { FaArrowCircleUp, FaComments } from 'react-icons/lib/fa'
//import action creators
import { upVotePost, downVotePost } from '../redux/actions/posts'
// import helper files
import { _fetch } from '../js/DiggitAPI'

class PostMin extends Component {

  state = {
    voted: false
  }

  _handlePostVote = (id, options = {}) => {
    if (!this.state.voted) {
      this.setState({ voted: true })
      options.body = JSON.stringify({ 'option': 'upVote' })
      return _fetch(`posts/${id}`, 'POST', options)
        .then(res => {
          this.props.dispatch(upVotePost(res))
        })
    } else {
      this.setState({ voted: false })
      options.body = JSON.stringify({ 'option': 'downVote' })
      return _fetch(`posts/${id}`, 'POST', options)
        .then(res => {
          this.props.dispatch(downVotePost(res))
        })
    }
  }

  render() {
    const { index, post } = this.props
    
    return (
      <li className='post'>
        <div className='rank-vote'>
          <span className='rank'>{index + 1 || ''}</span>
          <span onClick={() => this._handlePostVote(post.id)} className='vote'>
            {this.state.voted
              ? <FaArrowCircleUp color="dodgerblue" />
              : <FaArrowCircleUp />
            }
          </span>
          <span className='score'>{post.voteScore}</span>
        </div>
        <div className='post-title'>
          <Link to={`/${post.category}/${post.id}`}><span className='title'>{post.title}</span></Link>
          <span className='time'> Submitted {moment(post.timestamp).fromNow()} to d/{post.category} by {post.author} | <FaComments /> {post.commentNum === 0 
                              ? 'Leave the 1st Comment'
                              : (post.commentNum > 1)
                                ? `${post.commentNum} Comments`
                                : `${post.commentNum} Comment`
                              } </span>
        </div>
        <div className='post-button'>
          <Link to={`/${post.category}/${post.id}/edit`}><button>Edit</button></Link>
        </div>
      </li>
    )
  }
} // component class

const mapStateToProps = (state, ownProps) => {
  const { posts, comments } = state
  const post = posts[ownProps.postId]
  // add comment num to post for easy display
  const cKeys = Object.keys(comments)
  const post_comments = cKeys.filter(ckey => comments[ckey].parentId === post.id)
  post.commentNum = post_comments.length

  return { post, comments: state.comments }
}

export default connect(mapStateToProps)(PostMin);