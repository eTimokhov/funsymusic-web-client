import http from '../http-common'

// TODO: fix methods, remove not existing methods
class UserDataService {
  getLikeInfo (target, id) {
    return http.get(`/${this.getUrlByTarget(target)}/${id}/like`)
  }

  toggleLike (target, id, action) {
    return http.post(`/${this.getUrlByTarget(target)}/${id}/like`, { action })
  }

  getUrlByTarget (target) {
    switch (target) {
      case 'track':
        return 'track'
      case 'playlist':
        return 'playlist'
    }
  }
}

export default new UserDataService()
