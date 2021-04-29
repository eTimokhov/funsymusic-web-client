<template>
  <b-row>
    <b-col>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">Funsymusic</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item active-class="active" class="nav-link" to="/home">Home</b-nav-item>
            <b-nav-item active-class="active" class="nav-link" to="/browse/tracks">Tracks</b-nav-item>
            <b-nav-item active-class="active" class="nav-link" to="/browse/playlists">Playlists</b-nav-item>
            <b-nav-item active-class="active" class="nav-link" to="/browse/users">Users</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item active-class="active" class="nav-link" to="/feed">Feed</b-nav-item>
            <b-nav-item active-class="active" class="nav-link" to="/user/me">Username</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-col>
  </b-row>

  <!--  <nav class="navbar navbar-expand-lg navbar-light bg-light">-->
  <!--    <button class="navbar-toggler" type="button" data-toggle="collapse"-->
  <!--            data-target="#navbarContent">-->
  <!--      <span class="navbar-toggler-icon"></span>-->
  <!--    </button>-->
  <!--    <a class="navbar-brand" href="#">Funsymusic</a>-->
  <!--    <div class="collapse navbar-collapse" id="navbarContent">-->
  <!--      <ul class="navbar-nav">-->
  <!--        &lt;!&ndash;        <li class="nav-item" th:classappend="${page == 'home' ? 'active' : ''}">&ndash;&gt;-->
  <!--        <li class="nav-item">-->
  <!--          <router-link to="/home" active-class="active">Home</router-link>-->
  <!--        </li>-->
  <!--        <li class="nav-item">-->
  <!--          <router-link to="/browse/tracks" active-class="active">Tracks</router-link>-->
  <!--        </li>-->
  <!--        <li class="nav-item">-->
  <!--          <router-link to="/browse/playlists" active-class="active">Playlists</router-link>-->
  <!--        </li>-->
  <!--        <li class="nav-item">-->
  <!--          <router-link to="/browse/users" active-class="active">Users</router-link>-->
  <!--        </li>-->
  <!--      </ul>-->
  <!--      <ul class="navbar-nav ml-md-auto">-->
  <!--        <li class="nav-item">-->
  <!--          <router-link to="/feed" active-class="active">Feed</router-link>-->
  <!--        </li>-->
  <!--        <li class="nav-item">-->
  <!--          <router-link to="/user/me" active-class="active">username</router-link>-->
  <!--        </li>-->
  <!--        <li class="nav-item">-->
  <!--          LOGOUT-->
  <!--          &lt;!&ndash;            <form method="POST" th:action="@{~/logout}">&ndash;&gt;-->
  <!--          &lt;!&ndash;              <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>&ndash;&gt;-->
  <!--          &lt;!&ndash;              <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}"/>&ndash;&gt;-->
  <!--          &lt;!&ndash;              <button class="nav-link btn btn-outline-secondary">Log out</button>&ndash;&gt;-->
  <!--          &lt;!&ndash;            </form>&ndash;&gt;-->
  <!--        </li>-->
  <!--      </ul>-->
  <!--    </div>-->
  <!--  </nav>-->
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>

</style>
