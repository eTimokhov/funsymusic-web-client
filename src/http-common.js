import axios from 'axios'
import config from '@/config/config'
import authHeader from '@/services/auth-header'

export default axios.create({
  baseURL: `${config.funsymusicApiUrl}/api`,
  headers: {
    'Content-type': 'application/json',
    ...authHeader()
  }
})
