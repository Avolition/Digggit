export const LOAD_POSTS = 'LOAD_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

export function loadPosts ( posts ) {
  return {
    type: LOAD_POSTS,
    posts
  }
}

export function createPost ({ id, timestamp, title, body, author, category, voteScore }) {
  return {
    type: CREATE_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore
  }
}

export function updatePost ({ id, timestamp, title, body, author, category, voteScore }) {
  return {
    type: UPDATE_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore
  }
}

export function deletePost ({ id }) {
  return {
    type: DELETE_POST,
    id
  }
}