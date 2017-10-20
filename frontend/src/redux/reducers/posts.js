// import action creators
import {
  LOAD_POSTS,
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
  if(typeof action.type !== 'undefined') {
    switch(action.type){
      case LOAD_POSTS :
        const initialState = {}
          action.posts.forEach(post => {
            initialState[post.id] = {
              id: post.id,
              timestamp: post.timestamp,
              title: post.title,
              body: post.body,
              author: post.author,
              category: post.category,
              voteScore: post.voteScore
            }
        })
        return initialState
      case CREATE_POST :
        return {
          ...state,
            [action.id]: {
              id: action.id,
              timestamp: action.timestamp,
              title: action.title,
              body: action.body,
              author: action.author,
              category: action.category,
              voteScore: action.voteScore
            }
        };
      case UPDATE_POST :
      
        console.log('UPDATE_POST TRIGGERED: ', action);

        return state;
      case DELETE_POST :
        console.log('DELETE_POST TRIGGERED: ', action);
        return state;
      default:
        return state;
    }
  }
  return state;
}

export default posts;
