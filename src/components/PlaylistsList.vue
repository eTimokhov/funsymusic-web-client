<script>

import PlaylistDataService from '../services/PlaylistDataService'

export default {
  name: 'PlaylistsList',
  data () {
    return {
      playlistsData: [],
      page: 1,
      count: 0,
      pageSize: 10
    }
  },
  methods: {
    async retrievePlaylists () {
      // const response = await fetchPlaylists(this.page - 1, this.pageSize)
      const response = await PlaylistDataService.getAll(this.page - 1, this.pageSize)
      const {
        playlists,
        totalItems
      } = response.data
      this.playlistsData = playlists
      this.count = totalItems
    },

    handlePageChange (value) {
      this.page = value
      this.retrievePlaylists()
    }

  },
  async mounted () {
    await this.retrievePlaylists()
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
      <h4>Playlists List</h4>
      <ul class="list-group" id="tutorials-list">
        <li v-for="playlist in playlistsData" :key="playlist.id">
          <router-link :to="`/playlists/${playlist.id}`">{{ playlist.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>

</style>
