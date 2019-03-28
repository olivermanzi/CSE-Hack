import Vue from 'vue'
import Router from 'vue-router'
import Banner from '@/components/banner.vue'
import schedule from '@/components/schedule.vue'
import terms from '@/components/terms.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: schedule
    },
    {
      path: '/terms',
      name: 'Terms',
      component: terms
    }
  ]
})
