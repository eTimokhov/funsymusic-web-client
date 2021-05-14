<script>
import TracksList from '@/components/TracksList'
import PlaylistsList from '@/components/PlaylistsList'

export default {
  name: 'Users',
  components: {
    'tracks-list': TracksList,
    'playlists-list': PlaylistsList
  },
  data () {
    return {
      usersData: []
    }
  },
  computed: {
    currentUser () {
      return this.$store.state?.auth?.user
    },
    isCurrentUserPage () {
      return this.userId && this.currentUser?.id === this.userId
    },
    userId () {
      return parseInt(this.$route.params.id)
    }
  }
}
</script>

<template>
  <div>
    {{ userId }}
    <tracks-list
      :is-pagination-enabled=false
      header="Users tracks"
      :uploader-id=userId
      :page-size=5
    />
    <playlists-list
      :is-pagination-enabled=false
      header="Users playlists"
      :owner-id=userId
      :page-size=5
    />
  </div>
</template>

<style scoped>

</style>
