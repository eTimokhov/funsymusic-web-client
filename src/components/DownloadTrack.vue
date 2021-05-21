<script>

export default {
  // Track in playlists
  name: 'TipDetails',
  props: {
    trackFilename: {
      required: true
    }
  },
  computed: {
    currentUser () {
      return this.$store.state?.auth?.user
    }
  }
}
</script>

<template>
  <div>
    <b-button id="download" v-if="currentUser" size="lg" variant="white">
      <a :href="trackFilename | toDownloadLink" :download="trackFilename + '.mp3'">
        <b-icon icon="download" scale="1.5" variant="dark"/>
      </a>
    </b-button>
  </div>
</template>

<style scoped>
#download:focus {
  box-shadow: none;
}
</style>
