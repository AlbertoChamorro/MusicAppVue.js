import commonApiService from './common-http-service'

const trackService = {}

trackService.getAll = function (q) {
  const type = 'track'
  const params = { q, type }
  return commonApiService.get('/search', params)
}

export default trackService
