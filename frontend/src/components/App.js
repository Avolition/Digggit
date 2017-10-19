// import package deps
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import components
import Header from './Header'
import Main from './Main'

class App extends Component {

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
} // component class

export default App
