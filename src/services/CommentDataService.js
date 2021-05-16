import http from '../http-common'

class CommentDataService {
  getAll (params) {
    return http.get('/comments', { params })
  }

  get (id) {
    return http.get(`/comments/${id}`)
  }

  getByUser (userId) {
    return http.get('/comments/by', { params: { userId: userId } })
  }

  create (data) {
    return http.post('/comments', data)
  }
}

export default new CommentDataService()
