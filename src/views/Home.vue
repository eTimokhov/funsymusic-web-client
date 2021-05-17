<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TracksList from '@/components/TracksList'
import PlaylistsList from '@/components/PlaylistsList'
import UsersList from '@/components/UsersList'

export default {
  name: 'Home',
  components: {
    'tracks-list': TracksList,
    'playlists-list': PlaylistsList,
    'users-list': UsersList
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
      <b-col>
        <b-jumbotron header="Your favorite music service"
                     lead="Explore new music, create playlists, upload your own music and share it with friends!">
          <b-button-group v-if="!currentUser">
            <b-button to="/register" variant="secondary">Sign up</b-button>
            <b-button to="/login" variant="secondary">Sign in</b-button>
          </b-button-group>
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <tracks-list
          header="Explore new music"
          description="Check out new tracks that our users uploaded"
          :page-size=10
          :is-pagination-enabled=false
        />
      </b-col>
      <b-col md="4">
        <playlists-list
          header="Check new playlists"
          description="Listen new music collections that our users created"
          :page-size=10
          :is-pagination-enabled=false
        />
      </b-col>
      <b-col md="4">
        <users-list
          header="Subscribe to new users"
          description="Explore new users of our service and find new friends"
          :page-size=10
          :is-pagination-enabled=false
        />
      </b-col>
    </b-row>
  </div>
</template>
