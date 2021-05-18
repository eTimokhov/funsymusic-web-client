<script>
import TrackInfo from '@/components/TrackInfo'

export default {
  name: 'TrackPage',
  components: {
    'tracks-info': TrackInfo
  },
  data () {
    return {
      trackData: {}
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    trackId () {
      return this.$route.params.id
    }
  }
}
</script>

<template>
  <div>
    <b-row>
      <b-col>
        <tracks-info
          :track-id="trackId"
        />
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>

</style>
