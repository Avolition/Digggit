// import package deps
import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Loader from 'react-loader'
// import components
import Sidebar from './Sidebar'
import Posts from './Posts'
import PostMax from './PostMax'
import PostNew from './PostNew'
// import action creators
import { loadCategories } from '../redux/actions/categories'
import { loadPosts } from '../redux/actions/posts'
import { loadComments } from '../redux/actions/comments'
// import helpers
import { _fetch } from '../js/DiggitAPI'

class Main extends Component {

  state = {
    category: null, // category currently selected / displayed
    loader: true,
    sortBy: 'voteScore', // current post sort method
  }

  // fn for user to change displayed category
  _setCategory = (cat) => {
    this.setState({ category: cat })
  }

  // fn for user to change post sort method
  _setSortBy = (sort) => {
    this.setState({ sortBy: sort })
  }

  componentDidMount = () => {

    // load categories into store
    _fetch('categories', 'GET')
    .then(res => {
      this.setState({ loader: false, category: this.props.match.params.category });
      this.props.dispatch(loadCategories(res));
    }).catch(err => console.log('error retrieving categories: ', err))

    // load posts into store
    _fetch('posts', 'GET')
    .then(res => {
      this.props.dispatch(loadPosts(res));
    }).catch(err => console.log('error retrieving posts: ', err))

    // load comments into store
    _fetch('comments', 'GET')
    .then(res => {
      this.props.dispatch(loadComments(res));
    }).catch(err => console.log('error retrieving posts: ', err))

  }
  // render 
  render() {

    const { category, sortBy } = this.state

    return (
      this.state.loader
        ? <Loader color="#FFF" />
        :
        <section className="main">
          <Route exact path='/'
            render={() => <Redirect to='/all' />}
          />
          <Sidebar
            category={category}
            sortBy={sortBy}
            _setCategory={cat => this._setCategory(cat)}
            _setSortBy={sort => this._setSortBy(sort)}
            {...this.props}
          />
          <Route exact path='/:category'
            render={() => (
            <Posts
              category={category}
              sortBy={sortBy}
              {...this.props}
            />
            )}
          />
          <Switch>
            <Route exact path='/posts/new' render={() =>
              <PostNew
                categories={this.props.categories}
                _addPost={post => this._addPost(post)}
                _getPost={post => this._getPost(post)}
                {...this.props}
              />
            }/>
            <Route path='/:category/:post_id'
              render={() => (
              <PostMax
                sortBy={sortBy}
            />)}
            />
          </Switch>
        </section>

    )
  } // render
} // component class
// <Route path='/:category/:post_id' component={PostMax} {...this.props} />
function mapStateToProps (state) {
  return state
} // mapStateToProps

export default connect(mapStateToProps)(Main)
