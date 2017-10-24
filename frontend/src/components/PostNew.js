// import package deps
import React, { Component } from 'react';
// import action creators
import { createPost } from '../redux/actions/posts'
// import helper files
import { capitalize } from '../js/utils'
import { _fetch } from '../js/DiggitAPI'
import uuid from 'uuid/v1'

class PostNew extends Component {
  constructor() {
    super();
    this.state = {
      category: 'react',
      author: '',
      title: '',
      body: ''
    }
    this._addPost = this._addPost.bind(this)
  }

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  _addPost = (e) => {
    e.preventDefault()
    const id = uuid() // set unique id
    const { category } = this.state
    const options = { // set options
      body: JSON.stringify({
        'id': id,
        'timestamp': Date.now(),
        'category': category,
        'author': this.state.author,
        'title': this.state.title,
        'body': this.state.body,
        'commentNum': 0
      })
    };
    _fetch('posts', 'POST', options
      ).then(res => {
        this.props.dispatch(createPost(res))
        this.props.history.push(`/${category}/${id}`)
      }).catch(err => console.log('error adding post', err))
  }

  render() {
    // pull categories array and map into react elements
    const { categories } = this.props
    const allCats = categories.map(cat => {
      return <option key={cat.path} value={cat.path}>{capitalize(cat.name)}</option>
    })
    
    return (
      <form action="/posts" onSubmit={this._addPost} method='POST'>
        <label>Category</label>
        <select value={this.state.category} onChange={this._handleChange} name="category">
          {allCats}
        </select>
        <label>Author</label>
        <input value={this.state.author} onChange={this._handleChange} type="text" name='author' placeholder='author'/>
        <label>Title</label>
        <input value={this.state.title} onChange={this._handleChange} type="text" name='title' placeholder='title'/>
        <label>Post Text</label>
        <textarea value={this.state.body} onChange={this._handleChange} name='body' placeholder='body'/>
        <button type="submit">Submit</button>
      </form>
    )
  } // render
} // component

export default PostNew;