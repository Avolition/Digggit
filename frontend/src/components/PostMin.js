// import package deps
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
// import icons
import { FaArrowCircleOUp, FaArrowCircleUp, FaComments } from 'react-icons/lib/fa'
// import reducer method
import { updatePost } from '../redux/actions/posts'
// import helper files
import { localAPIClient } from '../js/DiggitAPI'

class PostMin extends Component {

  state = {
    voted: false
  }

  render() {
    const { index, post } = this.props
    
    return (
      <li className='post'>
        <div className='rank-vote'>
          <span className='rank'>{index + 1}</span>
          <span onClick={() => this._handlePostVote(post)} className='vote'>
            {this.state.voted
              ? <FaArrowCircleOUp />
              : <FaArrowCircleUp />
            }
          </span>
          <span className='score'>{post.voteScore}</span>
        </div>
        <div className='post-title'>
          <Link key={post.id} postid={post.id} to={`/${post.category}/${post.id}`}><span className='title'>{post.title}</span></Link>
          <span className='time'> Submitted {moment(post.timestamp).fromNow()} to d/{post.category} by {post.author} | <FaComments /> {post.commentNum} Comments </span>
        </div>
      </li>
    )
  }
} // component class


export default PostMin;