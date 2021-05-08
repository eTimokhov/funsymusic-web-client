<script>
import UsersList from '@/components/UsersList'

export default {
  name: 'Users',
  components: {
    'users-list': UsersList
  },
  data () {
    return {
      usersData: []
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    }
  }
}
</script>

<template>
  <div>
    <b-row>
      <b-col md="12">
        <h3>
          Explore new music
        </h3>
        <p>
          Check out new users that our users uploaded
        </p>
        <users-list/>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>

</style>
