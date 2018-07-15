import api from './app-config-service'

const get = function (url, params) {
  return api.get(url, {
    params: params
  })
    .then(res => res.data)
}

const httpManagerService = {
  get
}

export default httpManagerService
