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
    },
    header: {
      type: String,
      default: () => 'Comments'
    },
    description: {
      type: String,
      default: ''
    },
    noCommentsMessage: {
      type: String,
      default: 'No comments yet'
    }
  },
  data () {
    return {
      comments: []
    }
  },
  computed: {
    currentUser () {
      return this.$store.state?.auth?.user
    }
  },
  methods: {
    async retrieveComments () {
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
  <div>
    <h4>{{ header }}</h4>
    <h6 v-if="description && comments.length" class="text-muted">{{ description }}</h6>
    <h6 v-if="!comments.length" class="text-muted">{{ noCommentsMessage }}</h6>
    <comment-form v-if="currentUser" :track-id="trackId" @comment-added="retrieveComments"/>

    <template v-if="comments.length">
      <b-row v-for="comment in comments" :key="comment.id" class="mt-3">
        <b-col>
          <b-card no-body>
            <b-card-header class="card-header">
              <div class="d-flex align-items-center">
                <div class="mr-2">
                  <img class="rounded-circle" width="25" :src="comment.user.image | toSmallImg | toImgSrc">
                </div>
                <div class="ml-2">
                  <router-link :to="`/users/${comment.user.id}`" class="h6 m-0">{{ comment.user.username }}
                  </router-link>
                </div>
              </div>
            </b-card-header>
            <b-card-body class="pt-2 pb-2">
              <small class="text-muted h7 mb-2">
                <b-icon icon="clock"/>
                {{ comment.commentDate | toPrettyTime }}
              </small>
              <b-card-text>
                <div><span class="font-italic">{{ comment.text }}</span></div>
              </b-card-text>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </template>
  </div>
</template>

<style scoped>

</style>
