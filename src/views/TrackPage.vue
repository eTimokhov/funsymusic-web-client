<script>
import TrackInfo from '@/components/TrackInfo'

export default {
  name: 'TrackPage',
  components: {
    'track-info': TrackInfo
  },
  computed: {
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
        <track-info
          :track-id="trackId"
        />
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>

</style>
