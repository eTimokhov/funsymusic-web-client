<script>
import UploadService from '../services/UploadFilesService'

export default {
  name: 'AddProfileImage',
  data () {
    return {
      selectedFile: undefined,
      message: '',
      loading: false,
      fileInfos: []
    }
  },
  methods: {
    selectFile () {
      this.selectedFile = this.$refs.file.files.item(0)
    },
    upload () {
      this.loading = true
      UploadService.uploadTrack(this.selectedFile).then(
        response => {
          this.loading = false
          this.message = ''
          this.$emit('track-upload-success', response.data.trackInfo)
        },
        error => {
          this.loading = false
          this.message = error.response.data.message
        })

      this.selectedFile = undefined
    }

  }
}
</script>

<template>
  <div>
    <label class="btn btn-default">
      <input type="file" ref="file" @change="selectFile"/>
    </label>
    <b-button variant="outline-success" block :disabled="!selectedFile" @click="upload">
      <span v-show="loading" class="spinner-border spinner-border-sm"></span>
      <span>Upload</span>
    </b-button>
    <div class="text-danger">{{ message }}</div>
  </div>
</template>
