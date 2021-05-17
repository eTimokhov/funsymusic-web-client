<script>

import TrackDataService from '@/services/TrackDataService'

export default {
  name: 'TrackLikesList',
  props: {
    header: {
      type: String,
      default: () => 'Tracks'
    },
    description: {
      type: String,
      default: ''
    },
    userId: {
      required: true
    },
    listSize: {
      type: Number,
      default: () => 10
    }
  },
  data () {
    return {
      likedTracksData: []
    }
  },
  computed: {
    likedTracksExist () {
      return this.likedTracksData && this.likedTracksData.length > 0
    }
  },
  methods: {
    async retrieveLikedTracks () {
      const response = await TrackDataService.getLiked(this.userId)
      this.likedTracksData = response.data.tracks
    }
  },
  async mounted () {
    await this.retrieveLikedTracks()
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
          <b-iconstack font-scale="2">
            <b-icon stacked icon="heart-fill" variant="dark"></b-icon>
            <b-icon stacked icon="music-note-beamed" variant="white" scale="0.5"></b-icon>
          </b-iconstack>
        </div>
      </div>
      <small v-if="description">
        {{description}}
      </small>
    </b-card-header>
    <b-list-group flush>
      <template v-if="likedTracksExist">
        <b-list-group-item v-for="likedTrack in likedTracksData" :key="likedTrack.id" class="d-flex justify-content-between align-items-center">
          <div>
            <router-link :to="`/tracks/${likedTrack.id}`">
              <div class="font-weight-bold">{{ likedTrack.name }}</div>
            </router-link>
            <div class="text-muted">{{ likedTrack.artist }}</div>
          </div>
          <div class="float-right text-secondary">
            3:16
          </div>
        </b-list-group-item>
      </template>
      <b-list-group-item v-else>
        <div class="h6 text-muted">There are no liked tracks</div>
      </b-list-group-item>
    </b-list-group>
  </b-card>

</template>

<style scoped>

</style>
