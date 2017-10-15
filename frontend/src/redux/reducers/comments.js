// import action creators
import {
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
} from '../actions/comments'

// function commentActions(state = [], action) {
//   switch(action.type){
//     case CREATE_COMMENT :
//       console.log('CREATE_COMMENT TRIGGERED');
//       return state;
//     case UPDATE_COMMENT :
//       console.log('UPDATE_COMMENT TRIGGERED');
//       return state;
//     case DELETE_COMMENT :
//       console.log('DELETE_COMMENT TRIGGERED');
//       return state;
//     default:
//       return state;
//   }
//   return state;
// }

function comments(state = [], action) {
  if(typeof action.commentId !== 'undefined') {
    switch(action.type){
      case CREATE_COMMENT :
        console.log('CREATE_COMMENT TRIGGERED');
        return state;
      case UPDATE_COMMENT :
        console.log('UPDATE_COMMENT TRIGGERED');
        return state;
      case DELETE_COMMENT :
        console.log('DELETE_COMMENT TRIGGERED');
        return state;
      default :
        return state;
    }
  }
  return state;
}

export default comments;
