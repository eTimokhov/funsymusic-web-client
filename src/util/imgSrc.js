import config from '../config/config'

export default function (image, small = false) {
  return `${config.funsymusicApiUrl}/images/${image}${small ? '_small' : ''}.jpg`
}
