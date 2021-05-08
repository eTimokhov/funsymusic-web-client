import axios from 'axios'
import authHeader from './auth-header'
import config from '../config/config'

// TODO:
class UserService {
  getPublicContent () {
    return axios.get(config.funsymusicApiUrl + 'api/tracks/all')
  }

  getUserBoard () {
    return axios.get(config.funsymusicApiUrl + 'api/tracks/user', { headers: authHeader() })
  }

  getModeratorBoard () {
    return axios.get(config.funsymusicApiUrl + 'api/tracks/moderator', { headers: authHeader() })
  }

  getAdminBoard () {
    return axios.get(config.funsymusicApiUrl + 'api/tracks/admin', { headers: authHeader() })
  }
}

export default new UserService()
