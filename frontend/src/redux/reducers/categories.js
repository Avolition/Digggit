// import action creators
import {
  LOAD_CATEGORIES,
} from '../actions/categories'

function categories(state = [], action) {
  if(typeof action.type !== 'undefined') {
    switch(action.type){
      case LOAD_CATEGORIES :
        const initialState = []
        action.categories.forEach(cat => {
          initialState.push({ name: cat.name, path: cat.path })
        })
        return initialState
      default :
        return state
    }
  }
  return state
}

export default categories