import axios from 'axios'
import config from '../config/config'

const fetchTracks = async (page = 0, size = 0) => {
  try {
    return await axios.get(config.funsymusicApiUrl + 'api/tracks', {
      params: {
        page: page,
        size: size
      }
    })
  } catch (e) {
    console.log(e)
  }
}

export {
  fetchTracks
}
