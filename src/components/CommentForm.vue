<script>

import TrackComment from '@/model/form/trackComment'
import CommentDataService from '@/services/CommentDataService'

export default {
  name: 'CommentForm',
  props: {
    trackId: {
      required: true
    }
  },
  data () {
    return {
      comment: new TrackComment(this.trackId, '', 0),
      loading: false,
      message: ''
    }
  },
  computed: {
    currentUserExists () {
      return true
    }
  },
  methods: {
    handleSaveComment () {
      this.loading = true
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false
          return
        }
        CommentDataService.create(this.comment).then(
          () => {
            this.$emit('comment-added')
            this.loading = false
            this.comment = new TrackComment(this.trackId, '', 0)
            this.$validator.reset()
          },
          error => {
            this.loading = false
            this.message = error.message
          }
        )
      })
    }
  }
}
</script>

<template>
  <div class="list row">
    <div class="col-md-6">
      <div v-if="currentUserExists">
        <form id="addCommentForm" @submit.prevent="handleSaveComment">
          <div class="form-group">
            <label for="text">Leave your comment</label>
            <textarea
              v-model="comment.text"
              v-validate="'required'"
              class="form-control"
              id="text"
              rows="3"
              name="text"/>
            <input v-model="comment.trackId" type="hidden" name="trackId"/>
            <span v-if="errors.has('text')" class="text-danger">Comment text is required!</span>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Save</span>
            </button>
          </div>
        </form>
      </div>
      <h6>Comments</h6>
      <ul id="commentSection" class="list-unstyled"></ul>
    </div>
  </div>

</template>

<style scoped>

</style>
