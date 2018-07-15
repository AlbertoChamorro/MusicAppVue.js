import httpManagerService from './app-config-service'

const trackService = {}

trackService.getAll = function (q) {
  const type = 'track'

  return httpManagerService.get('/search', {
    params: { q, type }
  })
    .then(res => res.data)
}

export default trackService
