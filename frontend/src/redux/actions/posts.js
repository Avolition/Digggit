export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

export function createPost ({ postId, timestamp, title, body, author, category, voteScore }) {
  return {
    type: CREATE_POST,
    postId,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore
  }
}

export function updatePost ({ postId, timestamp, title, body, author, category, voteScore }) {
  return {
    type: UPDATE_POST,
    postId,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore
  }
}

export function deletePost ({ postId }) {
  return {
    type: DELETE_POST,
    postId
  }
}