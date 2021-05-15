<script>

import TrackDataService from '../services/TrackDataService'
import CommentsSection from '@/components/CommentsSection'

export default {
  name: 'TrackInfo',
  components: {
    'comments-section': CommentsSection
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
    <div class="row">
      <comments-section :track-id="trackId"/>
    </div>
  </div>
</template>

<style scoped>

</style>
