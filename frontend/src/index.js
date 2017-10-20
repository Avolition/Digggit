// import package deps
import React from 'react'
import ReactDOM from 'react-dom'
// new react router
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
// import store config
import store from './redux/store'
// import css
import './css/index.css'
// import components
import App from './components/App'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  , document.getElementById('root'))
