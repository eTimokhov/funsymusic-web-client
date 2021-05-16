<script>
import UserDetails from '@/components/UserDetails'
import TracksList from '@/components/TracksList'
import PlaylistsList from '@/components/PlaylistsList'
import UserDataService from '@/services/UserDataService'
import EventDataService from '@/services/EventDataService'
import EventsSection from '@/components/EventsSection'

export default {
  name: 'Users',
  components: {
    'user-details': UserDetails,
    'tracks-list': TracksList,
    'playlists-list': PlaylistsList,
    'events-section': EventsSection
  },
  data () {
    return {
      userData: null,
      userEvents: null
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
    },
    async retrieveEvents () {
      const response = await EventDataService.getByUser(this.userId)
      this.userEvents = response.data.events
    }
  },
  async mounted () {
    await Promise.all([this.retrieveUser(), this.retrieveEvents()])
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
    <events-section
      v-if="userEvents"
      :events="userEvents"
    />
  </div>
</template>

<style scoped>

</style>
