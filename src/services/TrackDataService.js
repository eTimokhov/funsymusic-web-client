import http from '../http-common'

// TODO: fix methods, remove not existing methods
class TrackDataService {
  getAll () {
    return http.get('/tracks')
  }

  get (id) {
    return http.get(`/tracks/${id}`)
  }

  create (data) {
    return http.post('/tracks', data)
  }

  update (id, data) {
    return http.put(`/tracks/${id}`, data)
  }

  delete (id) {
    return http.delete(`/tracks/${id}`)
  }

  deleteAll () {
    return http.delete('/tracks')
  }

  findByTitle (title) {
    return http.get(`/tracks?title=${title}`)
  }
}

export default new TrackDataService()
