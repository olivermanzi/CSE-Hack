import Vue from 'vue'
import Router from 'vue-router'

import banner from '@/components/banner.vue'
import schedule from '@/components/schedule.vue'
import cases from '@/components/cases.vue'
import faq from '@/components/faq.vue'
import terms from '@/components/terms.vue'
import organizers from '@/components/organizers.vue'
import partners from '@/components/partners.vue'
import gallery from '@/components/gallery.vue'


Vue.use(Router)

export default new Router({
  routes: [{
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
    path: '/organizers',
    name: 'Organizers',
    component: organizers
  },
  {
    path: '/partners',
    name: 'Partners',
    component: partners
  },
  {
    path: '/terms',
    name: 'Terms',
    component: terms
  }, 
  {
    path: '/gallery',
    name: 'Gallery',
    component: gallery
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: faq
  }
  ]
})

