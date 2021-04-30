<template>
  <div>
    <b-row>
      <b-col>
        <b-jumbotron header="Your favorite music service"
                     lead="Explore new music, create playlists, upload your own music and share it with friends!">
          <b-button-group>
            <b-button to="/login" variant="secondary">Sign in</b-button>
            <b-button to="/registration" variant="secondary">Sign up</b-button>
          </b-button-group>
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <h3>
          Explore new music
        </h3>
        <p>
          Check out new tracks that our users uploaded
        </p>
        <ul class="list-unstyled">
          <li v-for="track in tracksData" :key="track.id">
            <router-link :to="`/tracks/${track.id}`">{{ track.artist }} - {{ track.name }}</router-link>
          </li>
        </ul>
      </b-col>
      <b-col md="4">
        <h3>
          Check new playlists
        </h3>
        <p>
          Listen new music collections that our users created
        </p>
        <ul class="list-unstyled">
          <li>
            <router-link to="/playlists/1">Playlist 1</router-link>
          </li>
          <li>
            <router-link to="/playlists/2">Playlist 2</router-link>
          </li>
        </ul>
      </b-col>
      <b-col md="4">
        <h3>
          Subscribe to new users
        </h3>
        <p>
          Explore new users of our service and find new friends
        </p>
        <ul class="list-unstyled">
          <li>
            <router-link to="/users/1">User 1</router-link>
          </li>
          <li>
            <router-link to="/users/2">User 2</router-link>
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { fetchTracks } from '@/util/api'

export default {
  name: 'Home',
  data () {
    return {
      tracksData: []
    }
  },
  async mounted () {
    const response = await fetchTracks()
    this.tracksData = response.data
  }
}
</script>
