import Vue from 'vue'
import Router from 'vue-router'
import banner from '@/components/banner.vue'
import schedule from '@/components/schedule.vue'
import cases from '@/components/cases.vue'
import terms from '@/components/terms.vue'
import organizers from '@/components/organizers.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Banner',
      component: banner
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: schedule
    },
    {
      path: '/cases',
      name: 'Cases',
      component: cases
    },
    {
      path: '/terms',
      name: 'Terms',
      component: terms
    },
    {
      path: '/organizers',
      name: 'Organizers',
      component: organizers
    }
  ]
})
