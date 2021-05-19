<script>

import PlaylistDataService from '@/services/PlaylistDataService'

export default {
  // Track in playlists
  name: 'TipDetails',
  props: {
    trackId: {
      required: true
    }
  },
  data () {
    return {
      tipData: null
    }
  },
  computed: {
    currentUser () {
      return this.$store.state?.auth?.user
    },
    tipList () {
      // [{playlistId, playlistName, isTrackInPlaylist}]
      return this.tipData?.itip
    }
  },
  methods: {
    async retrieveTip () {
      const response = await PlaylistDataService.getTip(this.trackId)
      this.tipData = response.data
    },

    async handleAddTrackToPlaylist (playlistId) {
      await PlaylistDataService.addToPlaylist({
        trackId: this.trackId,
        playlistId
      })
      await this.retrieveTip()
    },

    async handleRemoveTrackFromPlaylist (playlistId) {
      await PlaylistDataService.removeFromPlaylist({
        trackId: this.trackId,
        playlistId
      })
      await this.retrieveTip()
    }
  },
  mounted () {
    this.retrieveTip()
  }
}
</script>

<template>
  <div>
    <b-button v-b-modal.modal-tip id="btnAddToPl" v-if="tipData" :disabled="!currentUser" size="lg" variant="white">
      <b-icon icon="journal-plus" scale="1.5" variant="dark"/>
    </b-button>
    <b-modal id="modal-tip" title="Add to playlists" hide-footer>
      <b-list-group v-if="tipList && tipList.length" flush>
        <b-list-group-item v-for="tip in tipList" :key="tip.playlistId"
                           class="d-flex justify-content-between align-items-center">
          <div class="font-weight-bold">
            <span><b-icon icon="list" variant="muted"></b-icon> </span>
            {{ tip.playlistName }}
          </div>
          <b-button v-if="!tip.trackInPlaylist" @click="handleAddTrackToPlaylist(tip.playlistId)" variant="outline-success">ADD</b-button>
          <b-button v-else @click="handleRemoveTrackFromPlaylist(tip.playlistId)">REMOVE</b-button>
        </b-list-group-item>
      </b-list-group>
      <div v-else class="h4 text-muted">
        You don't have any playlists yet
      </div>
      <b-button block @click="$bvModal.hide('modal-tip')">Close</b-button>
    </b-modal>
  </div>
</template>

<style scoped>
#btnAddToPl:focus {
  box-shadow: none;
}
</style>
