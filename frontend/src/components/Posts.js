// import package deps
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import components
import PostMin from './PostMin'

class Posts extends Component {

  render() {

    const { posts } = this.props

    // populate posts to display by category
    // const filteredPosts = category === 'all'
    //   ? posts
    //   : posts.filter(post => category === post.category ? true : false)


    
      // console.log("sortedPosts ", sortedPosts)

    // convert posts to React elements
    const displayPosts = posts.map((post, i) => {
        return (
            <PostMin key={post.id} postId={post.id} index={i} />
        )
    })
    // console.log("displayPosts ", displayPosts)

    return (
      <ul className='posts'>
      {displayPosts && displayPosts.length > 0
        ? displayPosts
        : <li className='noData'>No Posts to display for this category</li>
      }
      </ul>
    )
  }
}

function mapStateToProps (state, ownProps) {
  
  const reShapedPosts = state.posts
  const { category, sortBy } = ownProps

  // add comment num to post for easy display
  let pKeys = Object.keys(state.posts)
  let cKeys = Object.keys(state.comments)
  pKeys.forEach(pkey => {
    let filtered_keys = cKeys.filter(ckey => state.comments[ckey].parentId === pkey)
    reShapedPosts[pkey].commentNum = filtered_keys.length
  })
  // convert to array & filter based on user selected category
  let displayPosts = pKeys.map(key => reShapedPosts[key] = { ...reShapedPosts[key] })
  if (category !== 'all') {
    displayPosts = displayPosts.filter(post => category === post.category ? true : false)
  }
  // sort based on user selected method
  const sortedPosts = displayPosts.sort((a, b) => b[sortBy] - a[sortBy])

  return {
    posts: sortedPosts
  }
} // mapStateToProps

export default connect(mapStateToProps)(Posts)