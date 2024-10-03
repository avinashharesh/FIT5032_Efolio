import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import FirebaseSigninview from '@/views/FirebaseSigninview.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import BookList from '@/views/BookList.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninview
  },
  {
    path:'/FireRegister',
    name:'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path:'/AddBook',
    name:'AddBook',
    component:AddBookView
  },
  {
    path:'/BookList',
    name:'BookList',
    component: BookList
  },
  {
    path:'/GetBookCount',
    name:'GetBookCount',
    component:GetBookCountView
  },
  {
    path:'/weather',
    name:'Weather',
    component:WeatherView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router