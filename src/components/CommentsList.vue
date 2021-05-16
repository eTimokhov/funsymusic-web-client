<script>

import CommentDataService from '@/services/CommentDataService'

export default {
  name: 'CommentsList',
  props: {
    header: {
      type: String,
      default: () => 'Comments'
    },
    userId: {
      required: true
    },
    listSize: {
      type: Number,
      default: () => 10
    }
  },
  data () {
    return {
      commentsData: []
    }
  },
  computed: {
    commentsExist () {
      return this.commentsData && this.commentsData.length > 0
    }
  },
  methods: {
    async retrieveComments () {
      const response = await CommentDataService.getByUser(this.userId)
      this.commentsData = response.data.comments
    }
  },
  async mounted () {
    await this.retrieveComments()
  }
}
</script>

<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>{{ header }}</h4>
      <ul v-if="commentsExist" class="list-group" id="liked-tracks-list">
        <li v-for="comment in commentsData" :key="comment.id">
          <router-link :to="`/tracks/${comment.trackId}`">{{ comment.commentDateRel }}:</router-link>
          <small>{{ comment.text }}</small>
        </li>
      </ul>
      <p v-else>
        There are no comments
      </p>
    </div>
  </div>

</template>

<style scoped>

</style>
