<script>

import TrackDataService from '../services/TrackDataService'

export default {
  name: 'TracksList',
  props: {
    isPaginationEnabled: {
      type: Boolean,
      default: () => true
    },
    header: {
      type: String,
      default: () => 'Tracks'
    },
    uploaderId: Number,
    pageSize: {
      type: Number,
      default: () => 10
    }
  },
  data () {
    return {
      tracksData: [],
      page: 1,
      count: 0
    }
  },
  computed: {
    tracksExist () {
      return this.tracksData && this.tracksData.length > 0
    }
  },
  methods: {
    async retrieveTracks () {
      // const response = await fetchTracks(this.page - 1, this.pageSize)
      const response = await TrackDataService.getAll(this.page - 1, this.pageSize)
      const {
        tracks,
        totalItems
      } = response.data
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
    <div class="col-md-6">
      <b-pagination
        v-if="isPaginationEnabled"
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        prev-text="Prev"
        next-text="Next"
        @change="handlePageChange"
      ></b-pagination>
      <h4>{{ header }}</h4>
      <ul v-if="tracksExist" class="list-group" id="tracks-list">
        <li v-for="track in tracksData" :key="track.id">
          <router-link :to="`/tracks/${track.id}`">{{ track.artist }} - {{ track.name }}</router-link>
        </li>
      </ul>
      <p v-else>
        There are no tracks
      </p>
    </div>
  </div>

</template>

<style scoped>

</style>
