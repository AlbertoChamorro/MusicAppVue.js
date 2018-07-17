import api from './app-config-service'

const get = function (url, params) {
  return api.get(url, {
    params
  })
    .then(res => res.data)
}

const detail = function (url) {
  return api.get(url)
    .then(res => res.data)
}

const httpManagerService = {
  get,
  detail
}

export default httpManagerService
