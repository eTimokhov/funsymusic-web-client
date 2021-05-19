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
    description: {
      type: String,
      default: ''
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
      const response = await TrackDataService.getAll(this.buildRequestParams())
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
    },

    buildRequestParams () {
      const params = {
        page: this.page - 1,
        size: this.pageSize
      }
      if (this.uploaderId) {
        params.userId = this.uploaderId
      }
      return params
    }

  },
  async mounted () {
    await this.retrieveTracks()
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
          <b-icon icon="music-note-beamed" class="mr-2" scale="2" variant="dark"/>
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
      <template v-if="tracksExist">
        <b-list-group-item v-for="track in tracksData" :key="track.id" class="d-flex justify-content-between align-items-center">
          <div>
            <router-link :to="`/tracks/${track.id}`">
              <div class="font-weight-bold">{{ track.name }}</div>
            </router-link>
            <div class="text-muted">{{ track.artist }}</div>
          </div>
          <div class="text-muted">
            {{ track.length | toTrackTimeFormat }}
          </div>
        </b-list-group-item>
      </template>
      <b-list-group-item v-else>
        <div class="h6 text-muted">There are no tracks</div>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<style scoped>

</style>
