<script>

import CommentDataService from '@/services/CommentDataService'
import CommentForm from '@/components/CommentForm'

export default {
  name: 'CommentsSection',
  components: {
    'comment-form': CommentForm
  },
  props: {
    trackId: {
      required: true
    }
  },
  data () {
    return {
      comments: []
    }
  },
  computed: {},
  methods: {
    async retrieveComments () {
      // const response = await fetchTracks(this.page - 1, this.pageSize)
      const response = await CommentDataService.getAll(this.buildRequestParams())
      this.comments = response.data
    },

    buildRequestParams () {
      return {
        trackId: this.trackId
      }
    }

  },
  async mounted () {
    await this.retrieveComments()
  }
}
</script>

<template>
  <div class="row">
    <div class="col">
      <comment-form :track-id="trackId" @comment-added="retrieveComments"/>
      <h6>Comments</h6>
      <ul v-if="comments.length" id="commentSection" class="list-unstyled">
        <li v-for="comment in comments" :key="comment.id">
          <div class="media">
            <img class="mr-3" :src="`/images/${comment.user.image}_small.jpg`"/>
            <div class="media-body">
              <small class="d-block">
                by
                <router-link :to="`/users/${comment.user.username}`"> {{ comment.user.username }}</router-link>
                {{ comment.commentDateRel }}
              </small>
              <span class="font-italic">{{ comment.text }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>

</style>
