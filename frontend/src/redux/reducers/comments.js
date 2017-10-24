// import action creators
import {
  LOAD_COMMENTS,
  CREATE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from '../actions/comments'

function commentReducers(state = [], action) {
  switch(action.type){
    case UPVOTE_COMMENT :
      return {
        ...state,
          voteScore: state.voteScore + 1 // return post with voteScore + 1
      }
    case DOWNVOTE_COMMENT :
      return {
        ...state,
          voteScore: state.voteScore - 1 // return post with voteScore + 1
      }
    case UPDATE_COMMENT :
      return {
        ...state,
          timestamp: action.timestamp,
          body: action.body
      }
    default:
      return state
  }
}

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
        return {
          ...state,
            [action.id]: {
              id: action.id,
              parentId: action.parentId,
              timestamp: action.timestamp,
              body: action.body,
              author: action.author,
              voteScore: action.voteScore
            }
        };
      case UPVOTE_COMMENT :
        return {
          ...state,
            [action.id]: commentReducers(state[action.id], action)
        }
      case DOWNVOTE_COMMENT :
        return {
          ...state,
            [action.id]: commentReducers(state[action.id], action)
        }
      case UPDATE_COMMENT :
        return {
          ...state,
            [action.id]: commentReducers(state[action.id], action)
        }
      case DELETE_COMMENT :
        const newState = { ...state }
        delete newState[action.id]
        return newState
      default :
        return state
    }
  }
  return state
}

export default comments
