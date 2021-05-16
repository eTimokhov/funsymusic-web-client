<script>
import UploadService from '@/services/UploadFilesService'

export default {
  name: 'AddProfileImage',
  components: {

  },
  data () {
    return {
      loading: false,
      selectedFile: undefined,
      message: '',
      // initial, afterUpload, afterSave
      isUploaded: false
    }
  },
  methods: {
    resetModal () {
      this.isUploaded = false
    },
    selectFile () {
      this.selectedFile = this.$refs.file.files.item(0)
    },
    upload () {
      this.loading = true
      UploadService.uploadImage(this.selectedFile).then(
        response => {
          this.loading = false
          this.isUploaded = true
          this.message = ''
          this.$emit('image-upload-success')
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
    <b-button v-b-modal.modal-upload-image>Change profile image</b-button>
    <b-modal id="modal-upload-image" title="Upload profile image" @hidden="resetModal" hide-footer>
      <div v-if="!isUploaded">
        <div>
          <label class="btn btn-default">
            <input type="file" ref="file" @change="selectFile"/>
          </label>
          <button class="btn btn-success" :disabled="!selectedFile" @click="upload">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Upload</span>
          </button>
          <div class="text-danger">{{ message }}</div>
        </div>
      </div>
      <p v-else="">
        Image is successfully uploaded.
      </p>
      <b-button class="mt-3" block @click="$bvModal.hide('modal-upload-image')">Close</b-button>
    </b-modal>
  </div>
</template>

<style scoped>

</style>
