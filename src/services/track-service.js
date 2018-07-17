import commonApiService from './common-http-service'

const trackService = {}

trackService.getAll = function (q) {
  const type = 'track'
  const params = { q, type }
  return commonApiService.get('/search', params)
}

trackService.detail = function (id) {
  return commonApiService.detail(`/tracks/${id}`)
}

export default trackService
