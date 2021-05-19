<script>
import PlaylistsList from '@/components/PlaylistsList'
import AddPlaylist from '@/components/AddPlaylist'

export default {
  name: 'Playlists',
  components: {
    'playlists-list': PlaylistsList,
    'add-playlist': AddPlaylist
  },
  data () {
    return {
      playlistsData: []
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    updatePlaylists () {
      this.$refs.playlistsList.retrievePlaylists()
    }
  }
}
</script>

<template>
  <div>
    <b-row>
      <b-col md="9">
        <playlists-list
          :is-pagination-enabled=true
          header="All playlists"
          description="Check out all the playlists created by our users"
          :page-size=10
          ref="playlistsList"
        />
      </b-col>
      <b-col md="3">
        <add-playlist @playlist-added="updatePlaylists"/>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>

</style>
