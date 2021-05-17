<script>

import CommentDataService from '@/services/CommentDataService'

export default {
  name: 'CommentsList',
  props: {
    header: {
      type: String,
      default: () => 'Comments'
    },
    description: {
      type: String,
      default: ''
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
  <b-card no-body>
    <b-card-header>
      <div class="d-flex justify-content-between align-items-center">
        <div class="h4">
          <template v-if="header">
            {{ header }}
          </template>
        </div>
        <div>
          <b-icon icon="chat-left" class="mr-2" scale="2" variant="dark"/>
        </div>
      </div>
      <small v-if="description">
        {{ description }}
      </small>
    </b-card-header>
    <b-list-group flush>
      <template v-if="commentsExist">
        <b-list-group-item v-for="comment in commentsData" :key="comment.id">
          <div>
            <b-icon icon="chat-left" class="mr-2"/>
            <small class="text-muted">{{ comment.commentDate | toPrettyTime }} on </small>
            <small>
              <router-link :to="`/tracks/${comment.trackId}`">Track</router-link>
            </small></div>
          <div><small>{{ comment.text }}</small></div>
        </b-list-group-item>
      </template>
      <b-list-group-item v-else>
        <div class="h6 text-muted">There are no comments</div>
      </b-list-group-item>
    </b-list-group>
  </b-card>

</template>

<style scoped>

</style>
