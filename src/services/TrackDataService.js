import http from '../http-common'

class TrackDataService {
  getAll (params) {
    return http.get('/tracks', { params })
  }

  get (id) {
    return http.get(`/tracks/${id}`)
  }

  getLiked (userId) {
    return http.get('/tracks/liked', { params: { userId: userId } })
  }

  create (data) {
    return http.post('/tracks', data)
  }
}

export default new TrackDataService()
