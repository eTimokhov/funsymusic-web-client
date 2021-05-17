<script>

import PlaylistDataService from '@/services/PlaylistDataService'

export default {
  name: 'PlaylistLikesList',
  props: {
    header: {
      type: String,
      default: () => 'Playlists'
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
            <b-icon stacked icon="music-note-list" variant="white" scale="0.5"></b-icon>
          </b-iconstack>
        </div>
      </div>
      <small v-if="description">
        {{ description }}
      </small>
    </b-card-header>
    <b-list-group flush>
      <template v-if="likedPlaylistsExist">
        <b-list-group-item v-for="playlist in likedPlaylistsData" :key="playlist.id">
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
        <div class="h6 text-muted">There are no liked playlists</div>
      </b-list-group-item>
    </b-list-group>
  </b-card>

</template>

<style scoped>

</style>
