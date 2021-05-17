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
      <b-col md="9">
        <users-list
          :is-pagination-enabled=true
          header="All users"
          description="Check new users, find friends and people with similar musical taste!"
          :page-size=10
        />
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>

</style>
