
export const localAPIServ = 'http://localhost:3001/'
export const localAPIClient = 'http://localhost:3000/'


// Generate a unique auth token for the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const _fetch = (type, method, options = {}) => {
  
  options.method = method
  options.headers = {
    'Accept': 'application/json',
    'Authorization': 'blah',
    'Content-Type': 'application/json',
  }
  return fetch(localAPIServ + type, options)
  .then(res => res.json())
}


export const getAll = () =>
  fetch(`${localAPIServ}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)

export const get = (bookId) =>
  fetch(`${localAPIServ}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

export const update = (book, shelf) =>
  fetch(`${localAPIServ}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const search = (query, maxResults) =>
  fetch(`${localAPIServ}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, maxResults })
  }).then(res => res.json())
    .then(data => data.books)
