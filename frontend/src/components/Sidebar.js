// import package deps
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import components

// import helper files
import { capitalize } from '../js/utils'
import { localAPIClient } from '../js/DiggitAPI'

class Sidebar extends Component {
  
  state = {
    sortByViews: [
      { data: 'voteScore', name: 'votes' },
      { data:'timestamp', name: 'age' }
    ]
  }

  render() {
    const { categories, sortBy, _setCategory, _setSortBy, history } = this.props

    // populate sidebar category list
    const categoryList = 
      categories.map(field => {
        const path = field.path
        const classes = window.location.href === localAPIClient+path ? 'category active' : 'category'
        return (<Link onClick={() => _setCategory(field.name)} key={field.name} to={'/'+path}><li className={classes}>{capitalize(field.name)}</li></Link>)
      })
    
    // populate sidebar sortBy list
    const sortByList = this.state.sortByViews.map(field => {
      const classes = field.data === sortBy ? 'sortByField active' : 'sortByField'
      return (<li className={classes} onClick={() => _setSortBy(field.data)} key={field.name}>{capitalize(field.name)}</li>)
    })

    return (
      <aside>
        <ul className='categories'>
          <h6>Sub-Diggits</h6>
          <Link to='/all' onClick={() => _setCategory('all')}><li className={window.location.href === localAPIClient + 'all' ? 'category active' : 'category'}>All</li></Link>
          {categoryList}
        </ul>
        <ul className='sortByList'>
          <h6>Sort By</h6>
          {sortByList}
        </ul>
        {history.location.pathname === '/posts/new'
          ? null
          : <Link to='/posts/new'><button>Add Post</button></Link>}
      </aside>
    )
  }

}

function mapStateToProps ({ categories }) {
  return {categories}
} // mapStateToProps

export default connect(mapStateToProps)(Sidebar)