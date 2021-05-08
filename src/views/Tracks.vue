<script>
import TracksList from '@/components/TracksList'

export default {
  name: 'Tracks',
  components: {
    'tracks-list': TracksList
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
  },
  methods: {},
  async mounted () {
    // const response = await fetchTracks()
    // this.tracksData = response.data
  }
}
</script>

<template>
  <div>
    <b-row>
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
