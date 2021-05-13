import axios from 'axios'
import config from '../config/config'

class AuthService {
  login (user) {
    return axios
      .post(config.funsymusicApiUrl + '/api/auth/signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logout () {
    localStorage.removeItem('user')
  }

  register (user) {
    return axios.post(config.funsymusicApiUrl + 'api/auth/signup', {
      username: user.username,
      password: user.password,
      passwordConfirm: user.passwordConfirm
    })
  }
}

export default new AuthService()
