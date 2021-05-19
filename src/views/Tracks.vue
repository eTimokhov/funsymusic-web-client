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
  },
  methods: {
    updateTracks () {
      this.$refs.tracksList.retrieveTracks()
    }
  }
}
</script>

<template>
  <div>
    <b-row>
      <b-col md="9">
        <tracks-list
          :is-pagination-enabled=true
          header="All tracks"
          description="Check out all the track in our music service"
          :page-size=10
          ref="tracksList"
        />
      </b-col>
      <b-col md="3">
        <add-track @track-added="updateTracks"/>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>

</style>
