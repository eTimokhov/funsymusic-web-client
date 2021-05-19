<script>
import PlaylistInfo from '@/components/PlaylistInfo'

export default {
  name: 'PlaylistPage',
  components: {
    'playlist-info': PlaylistInfo
  },
  computed: {
    playlistId () {
      return this.$route.params.id
    }
  }
}
</script>

<template>
  <div>
    <b-row>
      <b-col>
        <playlist-info
          :playlist-id="playlistId"
        />
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>

</style>
