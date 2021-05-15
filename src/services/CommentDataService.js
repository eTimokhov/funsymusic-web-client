import http from '../http-common'

// TODO: fix methods, remove not existing methods
class CommentDataService {
  getAll (params) {
    return http.get('/comments', { params })
  }

  get (id) {
    return http.get(`/comments/${id}`)
  }

  create (data) {
    return http.post('/comments', data)
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

export default new CommentDataService()
