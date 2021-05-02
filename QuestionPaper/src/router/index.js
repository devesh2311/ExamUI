import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import gotoTeacherPage from '@/components/gotoTeacherPage'
import addQues from '@/components/addQues'
import gotoStudentPage from '@/components/gotoStudentPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/gotoTeacherPage',
      name: 'gotoTeacherPage',
      component: gotoTeacherPage
    },
    {
      path: '/addQues',
      name: 'addQues',
      component: addQues
    },
    {
      path: '/gotoStudentPage',
      name: 'gotoStudentPage',
      component: gotoStudentPage
    }
  ]
})
