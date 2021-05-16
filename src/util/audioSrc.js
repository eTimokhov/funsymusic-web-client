import config from '../config/config'

export default function (trackId) {
  return `${config.funsymusicApiUrl}/media/audio/${trackId}`
}
