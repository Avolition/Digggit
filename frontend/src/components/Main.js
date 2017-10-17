// import package deps
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
// import components
import Sidebar from './Sidebar'
import Posts from './Posts'

class Main extends Component {

  state = {

  }

  componentDidMount = () => {

  }

  // render 
  render() {

    return (
      <section className="main">
        <Sidebar />
        <Route
          exact path='/'
          render={() => (
          <Posts postNum='1' />
          )}
        />
        <Route
          exact path='/:category'
          render={() => (
          <Posts postNum='2' />
          )}
        />
      </section>
    )
  } // render





}

export default Main;
