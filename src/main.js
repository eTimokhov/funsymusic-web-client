import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import moment from 'moment'
import config from '@/config/config'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VeeValidate)

Vue.filter('toPrettyTime', function (date) {
  return moment(date).fromNow()
})

Vue.filter('toTrackTimeFormat', function (seconds) {
  return moment.utc(seconds * 1000).format('m:ss')
})

Vue.filter('toImgSrc', function (image) {
  return `${config.funsymusicApiUrl}/images/${image}.jpg`
})

Vue.filter('toSmallImg', function (image) {
  return image + '_small'
})

Vue.filter('toAudioSrc', function (trackId) {
  return `${config.funsymusicApiUrl}/media/audio/${trackId}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
