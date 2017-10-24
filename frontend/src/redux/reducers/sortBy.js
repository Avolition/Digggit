// import action creators
import {
  SORTBY
} from '../actions/sortBy'

function sort(state = [], action) {
  if(typeof action.type !== 'undefined') {
    switch(action.type){
      case SORTBY :
        return action.sortBy
      default :
        return state
    }
  }
  return state
}

export default sort