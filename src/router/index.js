import Vue from 'vue'
import Router from 'vue-router'
import Banner from '@/components/banner.vue'
import schedule from '@/components/schedule.vue'
import terms from '@/components/terms.vue'
import cases from '@/components/cases.vue'
import partners from '@/components/partners.vue'

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
    }, 
    {
      path: '/cases',
      name: 'Cases',
      component: cases
    },
    {
      path: '/partners',
      name: 'Partners',
      component: partners
    }
  ]
})
