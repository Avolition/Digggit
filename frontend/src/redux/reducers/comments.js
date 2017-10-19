// import action creators
import {
  LOAD_COMMENTS,
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
  if(typeof action.type !== 'undefined') {
    switch(action.type){
      case LOAD_COMMENTS :
        const initialState = {}
          action.comments.forEach(c => {
            initialState[c.id] = {
              id: c.id,
              parentId: c.parentId,
              timestamp: c.timestamp,
              body: c.body,
              author: c.author,
              voteScore: c.voteScore,
            }
        })
        return initialState
      case CREATE_COMMENT :
        console.log('CREATE_COMMENT TRIGGERED: ', action);
        return state;
      case UPDATE_COMMENT :
        console.log('UPDATE_COMMENT TRIGGERED: ', action);
        return state;
      case DELETE_COMMENT :
        console.log('DELETE_COMMENT TRIGGERED: ', action);
        return state;
      default :
        return state;
    }
  }
  return state;
}

export default comments;
