<script>

import PlaylistDataService from '../services/PlaylistDataService'

export default {
  name: 'PlaylistsList',
  props: {
    isPaginationEnabled: {
      type: Boolean,
      default: () => true
    },
    header: {
      type: String,
      default: () => 'Playlists'
    },
    ownerId: Number,
    pageSize: {
      type: Number,
      default: () => 10
    }
  },
  data () {
    return {
      playlistsData: [],
      page: 1,
      count: 0
    }
  },
  computed: {
    playlistsExist () {
      return this.playlistsData && this.playlistsData.length > 0
    }
  },
  methods: {
    async retrievePlaylists () {
      // const response = await fetchPlaylists(this.page - 1, this.pageSize)
      const response = await PlaylistDataService.getAll(this.buildRequestParams())
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
    },

    buildRequestParams () {
      const params = {
        page: this.page - 1,
        size: this.pageSize
      }
      if (this.ownerId) {
        params.userId = this.ownerId
      }
      return params
    }

  },
  async mounted () {
    await this.retrievePlaylists()
  }
}
</script>

<template>
  <div class="list row">
    <div class="col-md-6">
      <b-pagination
        v-show="isPaginationEnabled"
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        prev-text="Prev"
        next-text="Next"
        @change="handlePageChange"
      ></b-pagination>
      <h4>{{ header }}</h4>
      <ul v-if="playlistsExist" class="list-group" id="tutorials-list">
        <li v-for="playlist in playlistsData" :key="playlist.id">
          <router-link :to="`/playlists/${playlist.id}`">{{ playlist.name }}</router-link>
        </li>
      </ul>
      <p v-else>
        There are no playlists
      </p>
    </div>
  </div>

</template>

<style scoped>

</style>
