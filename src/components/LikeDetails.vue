<script>
import LikeDataService from '@/services/LikeDataService'

export default {
  name: 'LikeDetails',
  components: {
    // 'comments-section': CommentsSection
  },
  props: {
    // 'track' or 'playlist'
    target: {
      type: String,
      required: true
    },
    targetId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      likeInfo: null
    }
  },
  computed: {
    currentUser () {
      return this.$store.state?.auth?.user
    },
    totalLikes () {
      return this.likeInfo?.totalCount
    },
    isUserAuthorized () {
      return this.likeInfo?.auth
    },
    isTargetLikedByUser () {
      return this.likeInfo?.liked
    }
  },
  methods: {
    async retrieveLikeInfo () {
      this.loading = true
      const response = await LikeDataService.getLikeInfo(this.target, this.targetId)
      this.likeInfo = response.data.likeInfo
      this.loading = false
    },
    toggleLike () {
      this.loading = true
      const action = this.isTargetLikedByUser ? 'UNSET' : 'SET'
      LikeDataService.toggleLike(this.target, this.targetId, action).finally(
        () => {
          this.retrieveLikeInfo()
        }
      )
    }
  },
  async mounted () {
    await this.retrieveLikeInfo()
  }
}
</script>

<template>
  <div class="d-flex justify-content-between align-items-center">
    <b-button id="btnLike" v-if="likeInfo" :disabled="!isUserAuthorized" size="lg" variant="white" @click="toggleLike">
      <b-icon :icon="isTargetLikedByUser ? 'heart-fill' : 'heart'" scale="1.5" :variant="isTargetLikedByUser ? 'danger' : 'dark'"/>
    </b-button>
    <div class="h3">{{ totalLikes }}</div>
  </div>
</template>

<style scoped>
#btnLike:focus {
  box-shadow: none;
}
</style>
