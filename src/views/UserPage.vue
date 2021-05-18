<script>
import TracksList from '@/components/TracksList'
import PlaylistsList from '@/components/PlaylistsList'
import TrackLikesList from '@/components/TrackLikesList'
import PlaylistLikesList from '@/components/PlaylistLikesList'
import CommentsList from '@/components/CommentsList'
import UserDataService from '@/services/UserDataService'
import EventDataService from '@/services/EventDataService'
import EventsSection from '@/components/EventsSection'
import ProfileCard from '@/components/ProfileCard'

export default {
  name: 'Users',
  components: {
    'tracks-list': TracksList,
    'playlists-list': PlaylistsList,
    'events-section': EventsSection,
    'track-likes-list': TrackLikesList,
    'playlist-likes-list': PlaylistLikesList,
    'comments-list': CommentsList,
    'profile-card': ProfileCard
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
    },
    async updateInfo () {
      await Promise.all([this.retrieveUser(), this.retrieveEvents()])
    }
  },
  async mounted () {
    await this.updateInfo()
  }
}
</script>

<template>
  <div>
    <b-row>
      <b-col>
        <b-card-group columns>
          <profile-card
            v-if="userData"
            :user="userData"
            :current-user="currentUser"
            :is-current-user-page="isCurrentUserPage"
            @image-upload-success="updateInfo"
          />
          <tracks-list
            :is-pagination-enabled=false
            header="Tracks"
            description="Latest tracks uploaded by user"
            :uploader-id=userId
            :page-size=7
          />
          <playlists-list
            :is-pagination-enabled=false
            header="Playlists"
            description="Latest playlists created by user"
            :owner-id=userId
            :page-size=7
          />
          <track-likes-list
            header="Liked tracks"
            :user-id="userId"
          />
          <playlist-likes-list
            header="Liked playlists"
            :user-id="userId"
          />
          <comments-list
            header="Comments"
            :user-id="userId"
          />
        </b-card-group>
      </b-col>
    </b-row>
    <hr>
    <b-row class="mt-5">
      <b-col>
        <events-section
          v-if="userEvents"
          :events="userEvents"
          header="Events"
          description="Latest events and actions of this user"
          no-events-message="No events yet"
        />
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>

</style>
