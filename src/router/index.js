import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import schedule from '@/components/schedule.vue'
import terms from '@/components/terms.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
