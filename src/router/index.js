'use strict'

import Vue from 'vue'
import Router from 'vue-router'
const LOCAL_DEFAULT = 'en-us'

Vue.use(Router)

import home from '../home.vue'

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', redirect: LOCAL_DEFAULT },
    { path: '/:local/', component: home }
  ]
})
