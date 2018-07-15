import httpManagerService from './app-config-service'

const getAll = (q) => {
  const type = 'track'
  return httpManagerService.get('/search', {
    params: { q, type }
  })
    .then(res => res.data)
}

const trackService = {
  getAll
}

export default trackService
