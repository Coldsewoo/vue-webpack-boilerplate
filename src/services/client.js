import axios from 'axios'

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
})

const req = reqPromise => {
  return reqPromise
    .then(res => {
      res.config.data = {}
      return Promise.resolve(res)
    })
    .catch(err => {
      if (err.response) err.message = err.response.data.message
      return Promise.reject(err)
    })
}

export default {
  req,
  apiClient,
}
