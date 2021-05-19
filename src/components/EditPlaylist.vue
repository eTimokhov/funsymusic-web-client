<script>

import PlaylistDataService from '@/services/PlaylistDataService'
import Draggable from 'vuedraggable'

export default {
  // Track in playlists
  name: 'EditPlaylist',
  components: {
    draggable: Draggable
  },
  props: {
    playlistId: {
      required: true
    },
    tracksData: {
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      tracks: JSON.parse(JSON.stringify(this.tracksData)),
      isPlaylistSaved: false
    }
  },
  computed: {
    currentUser () {
      return this.$store.state?.auth?.user
    }
  },
  methods: {
    async handleUpdatePlaylist () {
      const updPlData = {
        playlistId: this.playlistId,
        trackIds: this.tracks.filter(t => t.uploaderUsername).map(t => t.id)
      }
      await PlaylistDataService.updatePlaylist(updPlData)
      this.isPlaylistSaved = true
      this.$emit('playlist-updated')
    },
    handleMarkDeletedToggle (trackId) {
      console.log('handleMarkDeletedToggle')
      const index = this.tracks.findIndex(track => {
        return track.id === trackId
      })
      this.tracks[index].uploaderUsername = this.tracks[index].uploaderUsername ? '' : 'doNotDelete'
    },

    resetModal () {
      this.tracks = JSON.parse(JSON.stringify(this.tracksData))
      this.isPlaylistSaved = false
    }

  }

}
</script>

<template>
  <div>
    <b-button v-b-modal.modal-edit-playlist id="btnAddToPl" v-if="tracks" :disabled="!currentUser" size="lg"
              variant="white">
      <b-icon icon="pencil" scale="1.5" variant="dark"/>
    </b-button>
    <b-modal id="modal-edit-playlist" title="Edit playlist" @hidden="resetModal" hide-footer>
      <template v-if="!isPlaylistSaved">
        <b-list-group v-if="tracks.length" flush>
          <draggable v-model="tracks" handle=".handle">
            <b-list-group-item
              v-for="track in tracks"
              :key="track.id"
              class="d-flex justify-content-between align-items-center"
              :variant="!track.uploaderUsername ? 'secondary' : ''">
              <div class="d-flex justify-content-between align-items-center">
                <b-icon class="handle mr-3" role='button' icon="list"
                        @click="handleMarkDeletedToggle(track.id)"></b-icon>
                <div>
                  <div class="font-weight-bold">{{ track.name }}</div>
                  <div class="text-muted">{{ track.artist }}</div>
                </div>
              </div>
              <div class="text-muted">
                <span>{{ track.length | toTrackTimeFormat }}</span>
                <b-icon icon="plus" :rotate="!track.uploaderUsername ? 0 : 45" scale="2" class="ml-2"
                        :variant="!track.uploaderUsername ? '' : 'danger'"
                        @click="handleMarkDeletedToggle(track.id)" role='button'></b-icon>
              </div>
            </b-list-group-item>
          </draggable>
        </b-list-group>
        <div v-else class="h4 text-muted">
          This playlist is empty
        </div>
        <b-button block variant="outline-success" @click="handleUpdatePlaylist">Save</b-button>
      </template>
      <p v-else>Playlist is saved successfully</p>
      <b-button block @click="$bvModal.hide('modal-edit-playlist')">Close</b-button>
    </b-modal>
  </div>
</template>

<style scoped>
#btnAddToPl:focus {
  box-shadow: none;
}
</style>
