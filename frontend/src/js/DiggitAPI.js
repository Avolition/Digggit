
export const localAPIServ = 'http://localhost:3001/'
export const localAPIClient = 'http://localhost:3000/'

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