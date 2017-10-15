// import package dependencies
import { createStore, compose } from 'redux';
// import root reducer
import rootReducer from './reducers/';
// // import data
// import comments from './data/comments';
// import posts from './data/posts';

// // create object for default data
// const defaultState = {
//   posts,
//   comments
// };

// use redux compose method to utilize redux dev tools || return store
const composeEnhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : store => store
);

const store = createStore(rootReducer, composeEnhancers);

export default store;