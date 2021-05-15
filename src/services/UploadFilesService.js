import http from '../http-common'

class UploadFilesService {
  upload (file, onUploadProgress) {
    const formData = new FormData()

    formData.append('file', file)

    return http.post('/tracks/uploadFile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress
    })
  }
}

export default new UploadFilesService()
