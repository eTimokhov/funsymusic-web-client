<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <div id="app" class="bg-light min-vh-100" style="padding-left: calc(100vw - 100%);">
    <b-container>
      <app-header/>
      <router-view class="mt-3"/>
      <app-footer/>
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
