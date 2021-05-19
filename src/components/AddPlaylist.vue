<script>
import Playlist from '@/model/form/playlist'
import PlaylistDataService from '@/services/PlaylistDataService'

export default {
  name: 'AddPlaylist',
  data () {
    return {
      playlist: new Playlist(''),
      loading: false,
      message: '',
      isPlaylistCreated: false
    }
  },
  methods: {
    handleCreatePlaylist () {
      this.loading = true
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false
          return
        }
        PlaylistDataService.create(this.playlist).then(
          () => {
            this.loading = false
            this.isPlaylistCreated = true
            this.playlist = new Playlist('')
            this.$emit('playlist-added')
          },
          error => {
            this.loading = false
            this.message = error.message
          }
        )
      })
    },
    resetModal () {
      this.isPlaylistCreated = false
    }
  }
}
</script>

<template>
  <div>
    <b-button v-b-modal.modal-new-playlist block size="lg" variant="outline-dark">
      <b-icon icon="plus-circle"></b-icon>
      New playlist</b-button>
    <b-modal id="modal-new-playlist" title="New playlist" @hidden="resetModal" hide-footer>
      <form v-if="!isPlaylistCreated" name="addPlaylist" @submit.prevent="handleCreatePlaylist">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            v-model="playlist.name"
            v-validate="'required'"
            type="text"
            class="form-control"
            name="name"
            id="name"
          />
          <span v-if="errors.has('name')" class="text-danger">Playlist name is required!</span>
        </div>
        <div class="form-group">
          <b-button variant="outline-success" block :disabled="loading" @click="handleCreatePlaylist">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Create</span>
          </b-button>
        </div>
        <div class="form-group">
          <span  v-if="message" class="text-danger">{{ message }}!</span>
        </div>
      </form>
      <p v-else>
        Playlist is successfully created.
      </p>
      <b-button block @click="$bvModal.hide('modal-new-playlist')">Close</b-button>
    </b-modal>
  </div>
</template>

<style scoped>

</style>
