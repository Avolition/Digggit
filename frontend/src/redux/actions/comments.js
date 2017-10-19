export const LOAD_COMMENTS = 'LOAD_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function loadComments ( comments ) {
  return {
    type: LOAD_COMMENTS,
    comments
  }
}

export function createComment ({ id, parentId, timestamp, body, author,  voteScore }) {
  return {
    type: CREATE_COMMENT,
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore
  }
}

export function updateComment ({ id, timestamp, body, author, voteScore }) {
  return {
    type: UPDATE_COMMENT,
    id,
    timestamp,
    body,
    author,
    voteScore
  }
}

export function deleteComment ({ id }) {
  return {
    type: DELETE_COMMENT,
    id
  }
}