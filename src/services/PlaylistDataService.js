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

  getTip (trackId) {
    return http.get('/playlists/trackInPlaylists', { params: { trackId } })
  }

  addToPlaylist (tipData) {
    return http.post('/playlists/addTrack', tipData)
  }

  removeFromPlaylist (tipData) {
    return http.post('/playlists/removeTrack', tipData)
  }

  getTracks (playlistId) {
    return http.get('/playlists/getTracks', { params: { playlistId } })
  }

  updatePlaylist (updPlData) {
    return http.post('/playlists/savePlaylist', updPlData)
  }
}

export default new PlaylistDataService()
