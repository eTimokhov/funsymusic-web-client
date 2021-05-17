<script>

import UserDataService from '../services/UserDataService'

export default {
  name: 'UsersList',
  props: {
    isPaginationEnabled: {
      type: Boolean,
      default: () => true
    },
    header: {
      type: String,
      default: () => 'Users'
    },
    description: {
      type: String,
      default: ''
    },
    uploaderId: Number,
    pageSize: {
      type: Number,
      default: () => 10
    }
  },
  data () {
    return {
      usersData: [],
      page: 1,
      count: 0
    }
  },
  computed: {
    usersExist () {
      return this.usersData && this.usersData.length > 0
    }
  },
  methods: {
    async retrieveUsers () {
      // const response = await fetchUsers(this.page - 1, this.pageSize)
      const response = await UserDataService.getAll(this.buildRequestParams())
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
    },

    buildRequestParams () {
      const params = {
        page: this.page - 1,
        size: this.pageSize
      }
      if (this.uploaderId) {
        params.userId = this.uploaderId
      }
      return params
    }

  },
  async mounted () {
    await this.retrieveUsers()
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
          <b-icon icon="person" class="mr-2" scale="2" variant="dark"/>
        </div>
      </div>
      <small v-if="description">
        {{description}}
      </small>
    </b-card-header>
    <b-list-group flush>
      <b-list-group-item v-if="isPaginationEnabled">
      <b-pagination
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        prev-text="Prev"
        next-text="Next"
        @change="handlePageChange"
          class="mb-0"
          pills
      ></b-pagination>
      </b-list-group-item>
      <template v-if="usersExist">
        <b-list-group-item v-for="user in usersData" :key="user.id">
          <div>
            <router-link :to="`/users/${user.id}`">
              <div class="font-weight-bold text-warning">{{ user.username }}</div>
            </router-link>
          </div>
          <div>
            <small>joined {{user.registrationDate | toPrettyTime}}</small>
          </div>
        </b-list-group-item>
      </template>
      <b-list-group-item v-else>
        <div class="h6 text-muted">There are no users</div>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<style scoped>

</style>
