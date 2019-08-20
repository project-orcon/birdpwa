import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeView from './views/HomeView.vue'
import DetailView from './views/DetailView.vue'
import PostView from './views/PostView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    }
  ]
})
