import Vue from 'vue'
import Router from 'vue-router'
import inTheaters from '@/components/inTheaters'
import moviesMsg from '../components/moviesMsg'
import starMsg from '../components/starMsg'
import smallComment from '../components/smallComment'
import Comment from '../components/Comment'
import comingSoon from '../components/comingSoon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/inTheaters',
      name: 'inTheaters',
      component: inTheaters
    },
    {
      path: '/movie/:id',
      name: 'moviesMsg',
      component: moviesMsg
    },
    {
      path: '/starMsg/:id',
      name: 'starMsg',
      component: starMsg
    },
    {
      path: '/smallComment/:id',
      name: 'smallComment',
      component: smallComment
    },
    {
      path: '/comment/:id',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/comingSoon',
      name: 'comingSoon',
      component: comingSoon
    }
  ]
})
