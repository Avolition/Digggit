// import action creators
import {
  LOAD_POSTS,
  CREATE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  EDIT_POST,
  DELETE_POST,
} from '../actions/posts'


function postReducers(state = [], action) {
  switch(action.type){
    case UPVOTE_POST :
      return {
        ...state,
          voteScore: state.voteScore + 1 // return post with voteScore + 1
      }
    case DOWNVOTE_POST :
      return {
        ...state,
          voteScore: state.voteScore - 1 // return post with voteScore + 1
      }
    case EDIT_POST :
      const newState = {
        ...state,
          title: action.title,
          body: action.body
      }
      return newState
    default:
      return state;
  }
}

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
      case UPVOTE_POST :
        return {
          ...state,
            [action.id]: postReducers(state[action.id], action)
        }
      case DOWNVOTE_POST :
        return {
          ...state,
            [action.id]: postReducers(state[action.id], action)
        }
      case EDIT_POST :
        return {
          ...state,
          [action.id]: postReducers(state[action.id], action)
        }
      case DELETE_POST :
        const newState = { ...state }
        delete newState[action.id]
        return newState
      default:
        return state;
    }
  }
  return state;
}

export default posts;
