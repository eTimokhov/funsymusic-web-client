<script>
import UserDataService from '@/services/UserDataService'
import AddProfileImage from '@/components/AddProfileImage'
import imgSrc from '@/util/imgSrc'

export default {
  name: 'UserDetails',
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
      imgSrc: imgSrc,
      isSubscribed: undefined,
      loading: false
    }
  },
  computed: {},
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
  <div class="row">
    <div class="col-md-3">
      <img class="rounded" :src="imgSrc(user.image)"/>
    </div>
    <div class="col-md-9">
      <h3>{{ user.username }}</h3>
      <p>
        Signed up {{ user.registrationDate }}
      </p>
      <add-profile-image v-if="isCurrentUserPage" @image-upload-success="handleImageChange" />
      <template v-if="!isCurrentUserPage && currentUser && isSubscribed !== undefined">
        <button v-if="!isSubscribed" @click="subscribe" :disabled="loading">
          <span v-show="loading" class="spinner-border spinner-border-sm"></span>
          <span>Subscribe</span>
        </button>
        <button v-else @click="unsubscribe" :disabled="loading">
          <span v-show="loading" class="spinner-border spinner-border-sm"></span>
          <span>Unsubscribe</span>
        </button>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>
