<script>
import Track from '@/model/form/track'
import TrackDataService from '@/services/TrackDataService'
import UploadTrack from '@/components/UploadTrack'

export default {
  name: 'AddTrack',
  components: {
    'upload-track': UploadTrack
  },
  data () {
    return {
      track: new Track('', '', 0, ''),
      loading: false,
      message: '',
      // initial, afterUpload, afterSave
      state: 'initial'
    }
  },
  methods: {
    handleSaveTrack () {
      this.loading = true
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false
          return
        }
        TrackDataService.create(this.track).then(
          () => {
            this.loading = false
            this.track = new Track('', '', 0, '')
            this.state = 'afterSave'
            this.$emit('track-added')
          },
          error => {
            this.loading = false
            this.message = error.message
          }
        )
      })
    },
    resetModal () {
      if (this.state === 'afterSave') this.state = 'initial'
    },
    handleUploadTrack (trackInfo) {
      this.track = new Track(trackInfo.name, trackInfo.artist, trackInfo.length, trackInfo.mediaFileName)
      this.state = 'afterUpload'
    },
    handleCancelSave () {
      this.track = new Track('', '', 0, '')
      this.state = 'initial'
    }
  }
}
</script>

<template>
  <div>
    <b-button v-b-modal.modal-new-track block size="lg" variant="outline-primary">
      <b-icon icon="upload"></b-icon>
      Upload track
    </b-button>
    <b-modal id="modal-new-track" title="New track" @hidden="resetModal" hide-footer>
      <upload-track v-if="state === 'initial'"
                    @track-upload-success="handleUploadTrack"/>
      <div v-if="state === 'afterUpload'">
        <form name="saveTrack" @submit.prevent="handleSaveTrack">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              v-model="track.name"
              v-validate="'required'"
              type="text"
              class="form-control"
              name="name"
              id="name"
            />
            <span v-if="errors.has('name')" class="text-danger">Track name is required!</span>
          </div>
          <div class="form-group">
            <label for="artist">Artist</label>
            <input
              v-model="track.artist"
              v-validate="'required'"
              type="text"
              class="form-control"
              name="artist"
              id="artist"
            />
            <span v-if="errors.has('artist')" class="text-danger">Track artist is required!</span>
          </div>
          <div class="form-group">
            <b-button variant="outline-success" block :disabled="loading" @click="handleSaveTrack">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Save</span>
            </b-button>
          </div>
          <div class="form-group">
            <span v-if="message" class="text-danger">{{ message }}!</span>
          </div>
        </form>
        <b-button variant="outline-danger" block @click="handleCancelSave">Cancel</b-button>
      </div>
      <p v-if="state === 'afterSave'">
        Track is successfully saved.
      </p>
      <b-button class="mt-3" block @click="$bvModal.hide('modal-new-track')">Close</b-button>
    </b-modal>
  </div>
</template>

<style scoped>

</style>
