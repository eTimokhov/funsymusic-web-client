<script>
export default {
  name: 'AppHeader',
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    showAdminBoard () {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN')
      }

      return false
    }
  },
  methods: {
    logOut () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/home')
    }
  }
}
</script>

<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand class="font-weight-bold">Funsymusic</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item active-class="active" class="nav-link" to="/home">Home</b-nav-item>
        <b-nav-item active-class="active" class="nav-link" to="/browse/tracks">Tracks</b-nav-item>
        <b-nav-item active-class="active" class="nav-link" to="/browse/playlists">Playlists</b-nav-item>
        <b-nav-item active-class="active" class="nav-link" to="/browse/users">Users</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <template v-if="currentUser">
          <b-nav-item active-class="active" class="nav-link" to="/feed">Feed</b-nav-item>
          <b-nav-item v-if="currentUser" active-class="active" class="nav-link" :to="`/users/${currentUser.id}`">
            <b-icon icon="person"></b-icon>
            {{
              currentUser.username
            }}
          </b-nav-item>
          <b-nav-item v-if="currentUser" active-class="active" class="nav-link" @click.prevent="logOut">
            <b-icon icon="signpost"></b-icon>
            Log out
          </b-nav-item>
        </template>
        <template v-else>
          <b-nav-item active-class="active" class="nav-link" to="/register">Sign up</b-nav-item>
          <b-nav-item active-class="active" class="nav-link" to="/login">Sign in</b-nav-item>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>

</style>
