// import package deps
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// import reducers
import categories from './categories'
import posts from './posts'
import comments from './comments'
import sortBy from './sortBy'

// combine own reducers and routerReducer
const rootReducer = combineReducers({ categories, posts, comments, sortBy, routing: routerReducer })

export default rootReducer