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
    description: {
      type: String,
      default: ''
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
  <b-card no-body>
    <b-card-header>
      <div class="d-flex justify-content-between align-items-center">
        <div class="h4">
          <template v-if="header">
            {{ header }}
          </template>
        </div>
        <div>
          <b-icon icon="music-note-list" class="mr-2" scale="2" variant="dark"/>
        </div>
      </div>
      <small v-if="description">
        {{description}}
      </small>
    </b-card-header>
    <b-list-group flush>
      <b-list-group-item v-if="isPaginationEnabled">
        <b-pagination
          v-model="page"
          :total-rows="count"
          :per-page="pageSize"
          prev-text="Prev"
          next-text="Next"
          @change="handlePageChange"
          class="mb-0"
          pills
        ></b-pagination>
      </b-list-group-item>
      <template v-if="playlistsExist">
        <b-list-group-item v-for="playlist in playlistsData" :key="playlist.id" class="d-flex justify-content-between align-items-center">
          <div>
            <div>
              <router-link :to="`/playlists/${playlist.id}`">
                <span class="font-weight-bold text-dark">{{ playlist.name }}</span>
              </router-link>
            </div>
            <div>
              <small> by </small>
              <router-link :to="`/users/${playlist.ownerId}`">
                <span class="text-muted">{{ playlist.ownerUsername }}</span>
              </router-link>
            </div>
          </div>
          <div>
            <b-icon icon="list" class="mr-2"/>
          </div>
        </b-list-group-item>
      </template>
      <b-list-group-item v-else>
        <div class="h6 text-muted">There are no playlists</div>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<style scoped>

</style>
