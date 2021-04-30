import axios from 'axios'
import { config } from '../config/config'

const fetchTracks = async () => {
  try {
    return await axios.get(config.funsymusicApiUrl + 'api/tracks')
  } catch (e) {
    console.log(e)
  }
}

export {
  fetchTracks
}
