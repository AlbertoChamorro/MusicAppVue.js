import http from 'trae'
import appConfig from './config'

const httpManagerService = http.create({
  baseUrl: appConfig.apiUrl
})

const responseMiddleware = (res) => {
  console.log('interceptor success -> ', res)
  return res
}

const rejectMiddleware = (err) => {
  console.log('interceptor error -> ', err)
  return Promise.reject(err)
}

httpManagerService.after(responseMiddleware, rejectMiddleware)

export default httpManagerService
