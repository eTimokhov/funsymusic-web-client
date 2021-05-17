<script>
import UserDataService from '@/services/UserDataService'
import AddProfileImage from '@/components/AddProfileImage'

export default {
  name: 'ProfileCard',
  components: {
    'add-profile-image': AddProfileImage
  },
  props: {
    user: {
      required: true
    },
    currentUser: Object,
    isCurrentUserPage: Boolean
  },
  data () {
    return {
      isSubscribed: undefined,
      loading: false
    }
  },
  methods: {
    async retrieveSubscription () {
      this.loading = true
      const response = await UserDataService.getSubscription(this.user.id)
      this.isSubscribed = response.data.isSubscribed
      this.loading = false
    },
    subscribe () {
      this.loading = true
      UserDataService.changeSubscription(this.user.id, 'SUBSCRIBE').finally(
        () => {
          this.retrieveSubscription()
        }
      )
    },
    unsubscribe () {
      this.loading = true
      UserDataService.changeSubscription(this.user.id, 'UNSUBSCRIBE').finally(
        () => {
          this.retrieveSubscription()
        }
      )
    },
    handleImageChange () {
      this.$emit('image-upload-success')
    }
  },
  async mounted () {
    await this.retrieveSubscription()
  }
}
</script>

<template>
  <b-card :img-src="user.image | toImgSrc" no-body>
    <b-card-body>
      <div class="h2">{{ user.username }}</div>
      <div class="h6 text-muted">Joined {{ user.registrationDate | toPrettyTime }}</div>
    </b-card-body>
    <b-list-group flush>
      <b-list-group-item v-if="isCurrentUserPage">
        <add-profile-image @image-upload-success="handleImageChange"/>
      </b-list-group-item>
      <b-list-group-item v-if="!isCurrentUserPage && currentUser && isSubscribed !== undefined">
        <b-button v-if="!isSubscribed" block variant="outline-success" @click="subscribe" :disabled="loading">
          <span v-show="loading" class="spinner-border spinner-border-sm"></span>
          <span>Subscribe</span>
        </b-button>
        <b-button v-else block variant="outline-warning" @click="unsubscribe" :disabled="loading">
          <span v-show="loading" class="spinner-border spinner-border-sm"></span>
          <span>Unsubscribe</span>
        </b-button>
      </b-list-group-item>
<!--      <b-list-group-item>-->
<!--        <div class="h6 text-muted">Followers</div>-->
<!--        <div class="h5">3</div>-->
<!--      </b-list-group-item>-->
    </b-list-group>
  </b-card>

</template>

<style scoped>

</style>
