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
      <b-col md="9">
        <tracks-list
          :is-pagination-enabled=true
          header="All tracks"
          description="Check out all the track in our music service"
          :page-size=10
        />
      </b-col>
      <b-col md="3">
        <add-track/>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>

</style>
