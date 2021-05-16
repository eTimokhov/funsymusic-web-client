import http from '../http-common'

// TODO: fix methods, remove not existing methods
class PlaylistDataService {
  getAll (params) {
    return http.get('/playlists', { params })
  }

  get (id) {
    return http.get(`/playlists/${id}`)
  }

  getLiked (userId) {
    return http.get('/playlists/liked', { params: { userId: userId } })
  }

  create (data) {
    return http.post('/playlists', data)
  }
}

export default new PlaylistDataService()
