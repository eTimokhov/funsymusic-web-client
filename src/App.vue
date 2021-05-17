<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<template>
  <div id="app">
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
@import './assets/_variables_united.scss';

// Import Bootstrap and BootstrapVue source SCSS files
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

</style>
