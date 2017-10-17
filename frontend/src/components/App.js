// import package deps
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// import components
import Header from './Header'
import Main from './Main'

class App extends Component {

  state = {
    categories: null,
    posts: null
  }

  _getData = (type, method) => {
    const options = {
      method: method,
      headers: new Headers({
        'Authorization': 'blah',
      }),
    };
    return fetch('http://localhost:3001/' + type, options)
    .then(res => res.json())
  }

  // when component mounts, API request is made to retrieve initial category data
  componentDidMount = () => {

    this._getData('categories', 'GET')
      .then(res => {
        this.setState({ categories: res.categories });
      }).catch(err => console.log(err))


  }

  // render App
  render() {

    return (
      <div className="app">
        <Route
          path='/'
          render={() => (
            <main>
              <Header title='Diggit' />
              <Main />
            </main>
          )}
        />
      </div>
    )
  } // render


  // <Route
  //   exact path='/search'
  //   render={() => (
  //     <Search
  //       myBooks={myBooks}
  //       _onSelectShelf={obj => this._setShelf(obj)}
  //       _modalOn={(e, bookInfo) => this._modalOn(e, bookInfo)}
  //       modalActive={modalActive}
  //     />
  //   )}
  // />
  // <BookInfoModal
  //   modalBook={modalBook}
  //   _modalOff={this._modalOff}
  // />

}

function mapStateToProps (posts, comments) {
  
}

export default connect()(App)
