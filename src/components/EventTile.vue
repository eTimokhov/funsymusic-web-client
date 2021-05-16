<script>
import imgSrc from '@/util/imgSrc'

export default {
  name: 'EventTile',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      imgSrc: imgSrc
    }
  },
  computed: {
    isTrackComment () {
      return this.event.action === 'TRACK_COMMENT'
    },
    isNewTrack () {
      return this.event.action === 'NEW_TRACK'
    },
    isNewPlaylist () {
      return this.event.action === 'NEW_PLAYLIST'
    },
    isTrackLike () {
      return this.event.action === 'TRACK_LIKE'
    },
    isPlaylistLike () {
      return this.event.action === 'PLAYLIST_LIKE'
    }
  }

}
</script>

<template>
  <div class="media">
    <img class="mr-3" :src="imgSrc(event.user.image, true)"/>
    <div class="media-body">
      <router-link :to="`/users/${event.user.id}`">{{ event.user.username }}</router-link>
      <template v-if="isTrackComment">
        <span> added comment to </span>
        <router-link :to="`/tracks/${event.targetId}`">{{ event.targetName }}</router-link>
      </template>
      <template v-else-if="isNewTrack">
        <span> uploaded new track: </span>
        <router-link :to="`/tracks/${event.targetId}`">{{ event.targetName }}</router-link>
      </template>
      <template v-else-if="isNewPlaylist">
        <span> created new playlist: </span>
        <router-link :to="`/playlists/${event.targetId}`">{{ event.targetName }}</router-link>
      </template>
      <template v-else-if="isTrackLike">
        <span> liked track: </span>
        <router-link :to="`/tracks/${event.targetId}`">{{ event.targetName }}</router-link>
      </template>
      <template v-else-if="isPlaylistLike">
        <span> liked playlist: </span>
        <router-link :to="`/playlists/${event.targetId}`">{{ event.targetName }}</router-link>
      </template>
      <small>{{ event.eventDate }}</small>
    </div>
  </div>
</template>

<style scoped>

</style>
