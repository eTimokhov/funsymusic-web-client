<script>

export default {
  name: 'EventTile',
  props: {
    event: {
      type: Object,
      required: true
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
  <!--  <div class="media">-->
  <!--    <img class="mr-3" :src="imgSrc(event.user.image, true)"/>-->
  <!--    <div class="media-body">-->
  <!--      <router-link :to="`/users/${event.user.id}`">{{ event.user.username }}</router-link>-->
  <!--      <template v-if="isTrackComment">-->
  <!--        <span> added comment to </span>-->
  <!--        <router-link :to="`/tracks/${event.targetId}`">{{ event.targetName }}</router-link>-->
  <!--      </template>-->
  <!--      <template v-else-if="isNewTrack">-->
  <!--        <span> uploaded new track: </span>-->
  <!--        <router-link :to="`/tracks/${event.targetId}`">{{ event.targetName }}</router-link>-->
  <!--      </template>-->
  <!--      <template v-else-if="isNewPlaylist">-->
  <!--        <span> created new playlist: </span>-->
  <!--        <router-link :to="`/playlists/${event.targetId}`">{{ event.targetName }}</router-link>-->
  <!--      </template>-->
  <!--      <template v-else-if="isTrackLike">-->
  <!--        <span> liked track: </span>-->
  <!--        <router-link :to="`/tracks/${event.targetId}`">{{ event.targetName }}</router-link>-->
  <!--      </template>-->
  <!--      <template v-else-if="isPlaylistLike">-->
  <!--        <span> liked playlist: </span>-->
  <!--        <router-link :to="`/playlists/${event.targetId}`">{{ event.targetName }}</router-link>-->
  <!--      </template>-->
  <!--      <small>{{ event.eventDate }}</small>-->
  <!--    </div>-->
  <!--  </div>-->
  <b-row class="mb-4">
    <b-col>
      <b-card no-body>
        <b-card-header class="card-header">
          <div class="d-flex align-items-center">
            <div class="mr-2">
              <img class="rounded-circle" width="50" :src="event.user.image | toSmallImg | toImgSrc">
            </div>
            <div class="ml-2">
              <router-link :to="`/users/${event.user.id}`" class="h5 m-0">{{event.user.username}}</router-link>
            </div>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="text-muted h7 mb-2">
            <b-icon icon="clock"/>
            {{event.eventDate | toPrettyTime}}
          </div>
          <b-card-text>
            <template v-if="isTrackComment">
              <b-icon icon="chat-left" class="mr-2" variant="muted"/>
              <span class="text-muted">Added comment to </span>
              <router-link :to="`/tracks/${event.targetId}`">{{ event.targetName }}</router-link>
              <div><span class="font-italic">{{ event.targetText }}</span></div>
            </template>
            <template v-else-if="isNewTrack">
              <b-icon icon="upload" class="mr-2" variant="muted"/>
              <span>Uploaded new track</span>
              <div>
                <router-link :to="`/tracks/${event.targetId}`">{{ event.targetName }}</router-link>
              </div>
            </template>
            <template v-else-if="isNewPlaylist">
              <b-icon icon="music-note-list" class="mr-2" variant="muted"/>
              <span>Created new playlist</span>
              <div>
                <router-link :to="`/playlists/${event.targetId}`">{{ event.targetName }}</router-link>
              </div>
            </template>
            <template v-else-if="isTrackLike">
              <b-icon icon="heart" class="mr-2" variant="muted"/>
              <span>Liked track: </span>
              <div>
                <router-link :to="`/tracks/${event.targetId}`">{{ event.targetName }}</router-link>
              </div>
            </template>
            <template v-else-if="isPlaylistLike">
              <b-icon icon="heart" class="mr-2" variant="muted"/>
              <span>Liked playlist: </span>
              <div>
                <router-link :to="`/playlists/${event.targetId}`">{{ event.targetName }}</router-link>
              </div>
            </template>
          </b-card-text>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<style scoped>

</style>
