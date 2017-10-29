// import package deps
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import components
import ErrorPage from './ErrorPage'
import Main from './Main'

class App extends Component {

  // render App
  render() {

    return (
      <Switch>
        <Route exact path='/'
          render={() => <Redirect to='/all' />}
        />
        <Route exact path='/error' component={ErrorPage} />
        <Route path="/:category" component={Main} />
      </Switch>
    )
  } // render
} // component class

export default App
