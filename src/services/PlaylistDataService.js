import http from '../http-common'

// TODO: fix methods, remove not existing methods
class PlaylistDataService {
  getAll () {
    return http.get('/playlists')
  }

  get (id) {
    return http.get(`/playlists/${id}`)
  }

  create (data) {
    return http.post('/playlists', data)
  }

  update (id, data) {
    return http.put(`/playlists/${id}`, data)
  }

  delete (id) {
    return http.delete(`/playlists/${id}`)
  }

  deleteAll () {
    return http.delete('/playlists')
  }

  findByTitle (title) {
    return http.get(`/playlists?title=${title}`)
  }
}

export default new PlaylistDataService()
