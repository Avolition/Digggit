export const LOAD_POSTS = 'LOAD_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export function loadPosts ( posts ) {
  return {
    type: LOAD_POSTS,
    posts
  }
}

export function createPost ({ id, timestamp, title, body, author, category, voteScore, commentNum }) {
  return {
    type: CREATE_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    commentNum
  }
}

export function upVotePost ({ id }) {
  return {
    type: UPVOTE_POST,
    id,
  }
}

export function downVotePost ({ id }) {
  return {
    type: DOWNVOTE_POST,
    id,
  }
}

export function editPost ({ id, title, body }) {
  return {
    type: EDIT_POST,
    id,
    title,
    body,
  }
}

export function deletePost ({ id }) {
  return {
    type: DELETE_POST,
    id
  }
}