<script>
import TracksList from '@/components/TracksList'
import AddTrack from '@/components/AddTrack'

export default {
  name: 'Tracks',
  components: {
    'tracks-list': TracksList,
    'add-track': AddTrack
  },
  data () {
    return {
      tracksData: []
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
      adfasf
      <add-track/>
      <b-col md="12">
        <h3>
          Explore new music
        </h3>
        <p>
          Check out new tracks that our users uploaded
        </p>
        <tracks-list/>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>

</style>
