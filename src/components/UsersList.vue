<script>

import UserDataService from '../services/UserDataService'

export default {
  name: 'UsersList',
  data () {
    return {
      usersData: [],
      page: 1,
      count: 0,
      pageSize: 10
    }
  },
  methods: {
    async retrieveUsers () {
      // const response = await fetchUsers(this.page - 1, this.pageSize)
      const response = await UserDataService.getAll(this.page - 1, this.pageSize)
      const {
        users,
        totalItems
      } = response.data
      this.usersData = users
      this.count = totalItems
    },

    handlePageChange (value) {
      this.page = value
      this.retrieveUsers()
    }

  },
  async mounted () {
    await this.retrieveUsers()
  }
}
</script>

<template>
  <div class="list row">
    <div class="col-md-12">
      <b-pagination
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        prev-text="Prev"
        next-text="Next"
        @change="handlePageChange"
      ></b-pagination>
    </div>
    <div class="col-md-6">
      <h4>Users List</h4>
      <ul class="list-group" id="tutorials-list">
        <li v-for="user in usersData" :key="user.id">
          <router-link :to="`/users/${user.id}`">{{ user.username }}</router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>

</style>
