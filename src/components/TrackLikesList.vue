<script>

import TrackDataService from '@/services/TrackDataService'

export default {
  name: 'TrackLikesList',
  props: {
    header: {
      type: String,
      default: () => 'Liked tracks'
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
  <div class="list row">
    <div class="col-md-6">
      <h4>{{ header }}</h4>
      <ul v-if="likedTracksExist" class="list-group" id="liked-tracks-list">
        <li v-for="likedTrack in likedTracksData" :key="likedTrack.id">
          <router-link :to="`/tracks/${likedTrack.id}`">{{ likedTrack.artist }} - {{ likedTrack.name }}</router-link>
        </li>
      </ul>
      <p v-else>
        There are no liked tracks
      </p>
    </div>
  </div>

</template>

<style scoped>

</style>
