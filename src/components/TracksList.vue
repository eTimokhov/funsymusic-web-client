<script>

import { fetchTracks } from '@/util/api'

export default {
  name: 'TracksList',
  data () {
    return {
      tracksData: [],
      page: 1,
      count: 0,
      pageSize: 3
    }
  },
  methods: {
    async retrieveTracks () {
      const response = await fetchTracks(this.page - 1, this.pageSize)
      const { tracks, totalItems } = response.data
      this.tracksData = tracks
      this.count = totalItems
    },

    handlePageChange (value) {
      this.page = value
      this.retrieveTracks()
    }

  },
  async mounted () {
    await this.retrieveTracks()
  }
}
</script>

<template>
  <div class="list row">
    <div class="col-md-12">
      <b-pagination
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        prev-text="Prev"
        next-text="Next"
        @change="handlePageChange"
      ></b-pagination>
    </div>
    <div class="col-md-6">
      <h4>Tracks List</h4>
      <ul class="list-group" id="tutorials-list">
        <li v-for="track in tracksData" :key="track.id">
          <router-link :to="`/tracks/${track.id}`">{{ track.artist }} - {{ track.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>

</style>
