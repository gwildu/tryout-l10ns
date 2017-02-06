import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './l10n'

new Vue(
  Vue.util.extend({router},
  {el: '#app',
  render: h => h(App)
}))
