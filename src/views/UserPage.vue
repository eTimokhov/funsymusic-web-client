<script>
import UserDetails from '@/components/UserDetails'
import TracksList from '@/components/TracksList'
import PlaylistsList from '@/components/PlaylistsList'
import UserDataService from '@/services/UserDataService'

export default {
  name: 'Users',
  components: {
    'user-details': UserDetails,
    'tracks-list': TracksList,
    'playlists-list': PlaylistsList
  },
  data () {
    return {
      userData: null
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
  },
  methods: {
    async retrieveUser () {
      const response = await UserDataService.get(this.userId)
      this.userData = response.data.user
    }
  },
  async mounted () {
    await this.retrieveUser()
  }
}
</script>

<template>
  <div>
    {{ userId }}
    <h3 v-if="isCurrentUserPage">
      This is current user's page!
    </h3>
    <user-details
      v-if="userData"
      :user="userData"
      :current-user="currentUser"
      :is-current-user-page="isCurrentUserPage"/>
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
