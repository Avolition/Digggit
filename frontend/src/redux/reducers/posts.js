// import action creators
import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../actions/posts'


// function postReducers(state = [], action) {
//   switch(action.type){
//     case CREATE_POST :
//       console.log('CREATE_POST TRIGGERED');
//       return state;
//     case UPDATE_POST :
//       console.log('UPDATE_POST TRIGGERED');
//       return state;
//     case DELETE_POST :
//       console.log('DELETE_POST TRIGGERED');
//       return state;
//     default:
//       return state;
//   }
//   return state;
// }

function posts(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    switch(action.type){
      case CREATE_POST :
        console.log('CREATE_POST TRIGGERED');
        return state;
      case UPDATE_POST :
        console.log('UPDATE_POST TRIGGERED');
        return state;
      case DELETE_POST :
        console.log('DELETE_POST TRIGGERED');
        return state;
      default:
        return state;
    }
  }
  return state;
}

export default posts;
