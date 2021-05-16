<script>

import PlaylistDataService from '@/services/PlaylistDataService'

export default {
  name: 'PlaylistLikesList',
  props: {
    header: {
      type: String,
      default: () => 'Liked playlists'
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
      likedPlaylistsData: []
    }
  },
  computed: {
    likedPlaylistsExist () {
      return this.likedPlaylistsData && this.likedPlaylistsData.length > 0
    }
  },
  methods: {
    async retrieveLikedPlaylists () {
      const response = await PlaylistDataService.getLiked(this.userId)
      this.likedPlaylistsData = response.data.playlists
    }
  },
  async mounted () {
    await this.retrieveLikedPlaylists()
  }
}
</script>

<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>{{ header }}</h4>
      <ul v-if="likedPlaylistsExist" class="list-group" id="liked-playlists-list">
        <li v-for="likedPlaylist in likedPlaylistsData" :key="likedPlaylist.id">
          <router-link :to="`/playlists/${likedPlaylist.id}`">{{ likedPlaylist.artist }} - {{ likedPlaylist.name }}</router-link>
        </li>
      </ul>
      <p v-else>
        There are no liked playlists
      </p>
    </div>
  </div>

</template>

<style scoped>

</style>
