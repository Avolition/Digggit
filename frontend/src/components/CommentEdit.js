// import package deps
import React, { Component } from 'react'
import { connect } from 'react-redux'
//import action creators
import { updateComment, deleteComment } from '../redux/actions/comments'
// import helper files
import { _fetch } from '../js/DiggitAPI'

class CommentEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.comment.body
    }
    this._updateComment = this._updateComment.bind(this)
    this._deleteComment = this._deleteComment.bind(this)
}

_handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

  _updateComment = (e) => {
    e.preventDefault()
    const { post, comment } = this.props
    const options = { // set options
      body: JSON.stringify({
        'timestamp': Date.now(),
        'body': this.state.body,
      })
    }
    _fetch(`comments/${comment.id}`, 'PUT', options
      ).then(res => {
        console.log('res: ', res)
        this.props.dispatch(updateComment(res))
        this.props.history.push(`/${post.category}/${post.id}`)
      }).catch(err => console.log('error adding post', err))
  }

  _deleteComment = (e) => {
    e.preventDefault()
    const { post, comment } = this.props
    _fetch(`comments/${comment.id}`, 'DELETE' 
      ).then(res => {
        this.props.dispatch(deleteComment(res))
        this.props.history.push(`/${post.category}/${post.id}`)
      }).catch(err => console.log('error adding post', err))
  }

  render() {

    return (
     <form className='comment-form' action="/comments" onSubmit={this._updateComment} method='POST'>
       <label>Comment Body</label>
       <textarea value={this.state.body} onChange={this._handleChange} name='body' placeholder='body'/>
       <button type="submit">Submit</button>
       <button type='button' onClick={this._deleteComment} className='delete-button'>Delete</button>
     </form>
    )
  }
} // component class

const mapStateToProps = (state, ownProps) => {

  const { post_id, comment_id } = ownProps.match.params

  return { 
    comment: state.comments[comment_id],
    post: state.posts[post_id]
  }
}

export default connect(mapStateToProps)(CommentEdit)