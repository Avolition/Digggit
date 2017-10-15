export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function createComment ({ commentId, parentPostId, timestamp, body, author,  voteScore }) {
  return {
    type: CREATE_COMMENT,
    commentId,
    parentPostId,
    timestamp,
    body,
    author,
    voteScore
  }
}

export function updateComment ({ commentId, timestamp, body, author, voteScore }) {
  return {
    type: UPDATE_COMMENT,
    commentId,
    timestamp,
    body,
    author,
    voteScore
  }
}

export function deleteComment ({ commentId }) {
  return {
    type: DELETE_COMMENT,
    commentId
  }
}