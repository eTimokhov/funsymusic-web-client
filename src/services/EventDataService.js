import http from '../http-common'

// TODO: fix methods, remove not existing methods
class EventDataService {
  getByUser (userId) {
    return http.get(`/events/${userId}`)
  }

  getBySubs () {
    return http.get('/events/subs')
  }
}

export default new EventDataService()
