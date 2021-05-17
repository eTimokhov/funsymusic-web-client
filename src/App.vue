<script>
import AppHeader from '@/components/AppHeader'

export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <div id="app" class="bg-light vh-100">
    <b-container>
      <app-header/>
      <router-view class="mt-3"/>
    </b-container>
  </div>
</template>

<style lang="scss">
// Import custom SASS variable overrides, or alternatively
// define your variable overrides here instead
@import './assets/_variables_yeti.scss';

// Import Bootstrap and BootstrapVue source SCSS files
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

</style>
