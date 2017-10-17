// import package dependencies
import { createStore, compose } from 'redux';
// import root reducer
import rootReducer from './reducers/'; // pulls index
// // import data
import { categories, posts, comments } from './defaultData';

// create object for default data
const defaultState = {
  categories,
  posts,
  comments
};

// use redux compose method to utilize redux dev tools || return store
const composeEnhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : store => store
);

const store = createStore(rootReducer, defaultState, composeEnhancers);

export default store;