import http from '../http-common'

class UploadFilesService {
  uploadTrack (file) {
    const formData = new FormData()

    formData.append('file', file)

    return http.post('/tracks/uploadFile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  uploadImage (file) {
    const formData = new FormData()

    formData.append('file', file)

    return http.post('/users/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export default new UploadFilesService()
