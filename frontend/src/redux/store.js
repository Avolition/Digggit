// import package dependencies
import { createStore, compose } from 'redux'
// import root reducer
import rootReducer from './reducers/' // pulls index which combines reducers into rootReducer
// // import data
// import { comments } from './defaultData'

// create object for default data
// const defaultState = {
//   // categories,
//   // posts,
//   comments
// };

// use redux compose method to utilize redux dev tools || return store
const composeEnhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : store => store
);

const store = createStore(rootReducer, composeEnhancers);

export default store;