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
        <main>
          <Route path="/"
            render={() => (
              <Header title='Diggit'/>
            )} />
          <Route path="/:category" component={Main} />
        </main>
      </div>
    )
  } // render
} // component class

export default App
