// import package deps
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import posts from './posts';
import comments from './comments';

// combine own reducers and routerReducer
const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;