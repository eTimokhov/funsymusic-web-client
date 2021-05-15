import http from '../http-common'

// TODO: fix methods, remove not existing methods
class UserDataService {
  getAll (params) {
    return http.get('/users', { params })
  }

  get (id) {
    return http.get(`/users/${id}`)
  }

  getSubscription (id) {
    return http.get(`/users/${id}/sub`)
  }

  changeSubscription (id, action) {
    return http.post(`/users/${id}/sub`, { action })
  }
}

export default new UserDataService()
