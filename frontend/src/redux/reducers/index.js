// import package deps
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// import reducers
import categories from './categories'
import posts from './posts'
import comments from './comments'

// combine own reducers and routerReducer
const rootReducer = combineReducers({ categories, posts, comments, routing: routerReducer })

export default rootReducer