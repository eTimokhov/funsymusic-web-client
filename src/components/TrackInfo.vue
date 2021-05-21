<script>

import TrackDataService from '../services/TrackDataService'
import CommentsSection from '@/components/CommentsSection'
import LikeDetails from '@/components/LikeDetails'
import TipDetails from '@/components/TipDetails'
import DownloadTrack from '@/components/DownloadTrack'
import Aplayer from 'vue-aplayer'

export default {
  name: 'TrackInfo',
  components: {
    'comments-section': CommentsSection,
    'like-details': LikeDetails,
    'tip-details': TipDetails,
    'download-track': DownloadTrack,
    aplayer: Aplayer
  },
  props: {
    trackId: {
      required: true
    }
  },
  data () {
    return {
      trackData: {}
    }
  },
  computed: {
    trackDataForPlayer () {
      return {
        title: this.trackData.name,
        artist: this.trackData.artist,
        src: this.$options.filters.toAudioSrc(this.trackData.mediaFileName)
      }
    }
  },
  methods: {
    async retrieveTrack () {
      const response = await TrackDataService.get(this.trackId)
      this.trackData = response.data.track
    }
  },
  async mounted () {
    await this.retrieveTrack()
  }
}
</script>

<template>
  <div class="div">
    <b-row class="justify-content-md-center">
      <b-col lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between align-items-center">
            <div>
              <div class="h1">{{ trackData.name }}</div>
              <div class="h4 text-muted">by {{ trackData.artist }}</div>
              <div class="h6 text-muted">uploaded by {{ trackData.uploaderUsername }}</div>
            </div>
            <div>
              <like-details
                v-if="trackData"
                target="track"
                :target-id="trackId"
              />
              <tip-details v-if="trackData" :track-id="trackId"/>
              <download-track v-if="trackData" :track-filename="trackData.mediaFileName"/>
            </div>
          </b-card-header>
          <b-card-body class="p-0">
            <aplayer :music="trackDataForPlayer" ref="aplayer"
            />
          </b-card-body>
        </b-card>
        <hr>
      </b-col>
    </b-row>

    <b-row class="justify-content-md-center mt-3">
      <b-col lg="6">
        <comments-section :track-id="trackId"/>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>

</style>
