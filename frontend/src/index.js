// import package deps
import React from 'react'
import ReactDOM from 'react-dom'
// new react router
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
// import store config
import store from './redux/store'
// import css
import './css/index.css'
// import components
import App from './components/App'
// import root reducer
// import rootReducer from './redux/reducers/index.js'

// set component route paths in overarching RootApp
const RootApp = () => (
  <Switch>
    <Route path='/' component={App}>
    
    </Route>
  </Switch>
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RootApp />
    </BrowserRouter> 
  </Provider>
  , document.getElementById('root'))
