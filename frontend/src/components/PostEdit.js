// import package deps
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import action creators
import { editPost, deletePost } from '../redux/actions/posts'
// import helper files
import { _fetch } from '../js/DiggitAPI'

class PostEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
      id: props.id,
      title: props.title,
      body: props.body
    }
    this._updatePost = this._updatePost.bind(this)
    this._deletePost = this._deletePost.bind(this)
  }

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  _updatePost = (e) => {
    e.preventDefault()
    const { id, category, title, body } = this.state
    const options = {
      body: JSON.stringify({
        'title': title,
        'body': body
        })
      }
    _fetch(`posts/${id}`, 'PUT', options,
      ).then(res => {
        this.props.dispatch(editPost(res))
        this.props.history.push(`/${category}/${id}`)
      }).catch(err => console.log('error adding post', err))
  }

  _deletePost = (e) => {
    e.preventDefault()
    const { id } = this.state
    _fetch(`posts/${id}`, 'DELETE' 
      ).then(res => {
        this.props.history.push('/all')
        this.props.dispatch(deletePost(res))
      }).catch(err => console.log('error adding post', err))
  }

  render() {

    const { id, title, body } = this.state
    
    return (
      <form action={`posts/${id}`} onSubmit={this._updatePost} method='PUT'>
        <label>Title</label>
        <input value={title} onChange={this._handleChange} type="text" name='title' placeholder='title' required/>
        <label>Post Text</label>
        <textarea value={body} onChange={this._handleChange} name='body' placeholder='body' required/>
        <button type='submit'>Submit</button>
        <button type='button' onClick={this._deletePost} className='delete-button'>Delete</button>
      </form>
    )
  } // render
} // component

const mapStateToProps = (state, ownProps) => {
  // pull post data required for edit / delete
  const id = ownProps.match.params.post_id
  const category = state.posts[id].category
  const title = state.posts[id].title
  const body = state.posts[id].body
  return { id, category, title, body }
} // mapStateToProps

export default connect(mapStateToProps)(PostEdit)