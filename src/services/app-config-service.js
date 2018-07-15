import http from 'trae'
import appConfig from './config'

const httpManagerService = http.create({
  baseUrl: appConfig.apiUrl
})

export default httpManagerService
