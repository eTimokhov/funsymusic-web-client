<script>
import PlaylistsList from '@/components/PlaylistsList'

export default {
  name: 'Playlists',
  components: {
    'playlists-list': PlaylistsList
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
  }
}
</script>

<template>
  <div>
    <b-row>
      <b-col md="12">
        <h3>
          Browse new playlists
        </h3>
        <p>
          Check out new playlists that our users created
        </p>
        <playlists-list/>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>

</style>
