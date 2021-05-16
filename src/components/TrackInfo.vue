<script>

import TrackDataService from '../services/TrackDataService'
import CommentsSection from '@/components/CommentsSection'
import LikeDetails from '@/components/LikeDetails'
import audioSrc from '@/util/audioSrc'

export default {
  name: 'TrackInfo',
  components: {
    'comments-section': CommentsSection,
    'like-details': LikeDetails
  },
  props: {
    trackId: {
      required: true
    }
  },
  data () {
    return {
      trackData: null,
      audioSrc: audioSrc
    }
  },
  computed: {},
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
  <div class="list row">
    <div class="col-md-6">
      <li v-if="trackData">
        <ul>Name: {{ trackData.name }}</ul>
        <ul>Artist: {{ trackData.artist }}</ul>
        <ul>Length: {{ trackData.length }}</ul>
        <ul>Uploader: {{ trackData.uploaderUsername }}</ul>
      </li>
    </div>
    <like-details
      v-if="trackData"
      target="track"
      :target-id="trackId"
    />
    <div class="row">
      <comments-section :track-id="trackId"/>
    </div>
    <div class="row">
      Audio:
      <audio controls :src="audioSrc(trackId)" type="audio/mpeg"/>
    </div>
  </div>
</template>

<style scoped>

</style>
