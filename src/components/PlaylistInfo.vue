<script>

import PlaylistDataService from '../services/PlaylistDataService'
import EditPlaylist from '@/components/EditPlaylist'
import LikeDetails from '@/components/LikeDetails'
import Aplayer from 'vue-aplayer'

export default {
  name: 'PlaylistInfo',
  components: {
    'like-details': LikeDetails,
    'edit-playlist': EditPlaylist,
    aplayer: Aplayer
  },
  props: {
    playlistId: {
      required: true
    }
  },
  data () {
    return {
      playlistData: null,
      tracksData: null
    }
  },
  computed: {
    tracksDataForPlayer () {
      return this.tracksData?.map(this.trackToPlayerFormat)
    }
  },
  methods: {
    trackToPlayerFormat (track) {
      return {
        title: track.name,
        artist: track.artist,
        src: this.$options.filters.toAudioSrc(track.mediaFileName)
      }
    },
    async retrievePlaylist () {
      const response = await PlaylistDataService.get(this.playlistId)
      this.playlistData = response.data.playlist
    },
    async retrieveTracks () {
      const response = await PlaylistDataService.getTracks(this.playlistId)
      this.tracksData = response.data.tracks
    }
  },
  async mounted () {
    await Promise.all([this.retrievePlaylist(), this.retrieveTracks()])
    this.$refs.aplayer.onSelectSong({ ...this.tracksDataForPlayer[0] })
  }
}
</script>

<template>
  <div class="div">
    <b-row class="justify-content-md-center">
      <b-col lg="6">
        <b-card no-body>
          <b-card-header v-if="playlistData" class="d-flex justify-content-between align-items-center">
            <div>
              <div class="h1">{{ playlistData.name }}</div>
              <div class="h5 text-muted">created by {{ playlistData.ownerUsername }}</div>
              <div class="text-muted h6">
                <b-icon icon="clock" class="mr-1"/>
                {{ playlistData.createDate | toPrettyTime }}
              </div>
            </div>
            <div>
              <like-details
                v-if="playlistData"
                target="playlist"
                :target-id="playlistId"
              />
              <edit-playlist
                v-if="tracksData"
                :tracks-data="tracksData"
                :playlist-id="playlistId"
                @playlist-updated="retrieveTracks"
              />
            </div>
          </b-card-header>
          <b-card-body class="p-0">
            <aplayer v-if="tracksDataForPlayer && tracksDataForPlayer.length" :music="tracksDataForPlayer[0]"
                     :list="tracksDataForPlayer" ref="aplayer"/>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>

</style>
