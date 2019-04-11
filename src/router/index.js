import Vue from 'vue'
import Router from 'vue-router'
import Banner from '@/components/banner.vue'
import schedule from '@/components/schedule.vue'
import terms from '@/components/terms.vue'
import cases from '@/components/cases.vue'
import partners from '@/components/partners.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Banner',
    component: Banner
  },
  {
    path: '/cases',
    name: 'Cases',
    component: cases
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: schedule
  },
  // {
  //   path: '/organizers',
  //   name: 'Organizers',
  //   component: organizers
  // },
  {
    path: '/partners',
    name: 'Partners',
    component: partners
  },
  {
    path: '/terms',
    name: 'Terms',
    component: terms
  }
  ]
})

