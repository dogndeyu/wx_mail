import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

const router = new Router((() => {
  const routes = [
    // {
    //   path: '*',
    //   name: '找不到页面',
    //   component: () =>
    //     import (`../pages/404`)
    // },
    {
      path: '*',
      name: '我的积分商城 ',
      component: () =>
        import (`../pages/Home`)
    },
    {
      path: '/',
      name: "我的积分商城",
      component: () =>
        import (`../pages/Home`),
    },
    {
      path: '/ScoreList',
      name: "我的积分明细",
      component: () =>
        import (`../pages/ScoreList`)
    },
    {
      path: '/ProductDetail',
      name: "商品详情",
      component: () =>
        import (`../pages/ProductDetail`)
    },
    {
      path: '/ProductClassify',
      name: "商品分类",
      component: () =>
        import (`../pages/ProductClassify`)
    }, {
      path: '/Order',
      name: "我的订单",
      component: () =>
        import (`../pages/Order`)
    }, {
      path: '/OrderInfo',
      name: "订单详情",
      component: () =>
        import (`../pages/OrderInfo`)
    },
    {
      path: '/SignIn',
      name: "我的签到",
      component: () =>
        import (`../pages/SignIn`)
    }
  ]
  // pages.forEach(({
  //   name,
  //   path
  // }) => {
  //   routes.push({
  //     name,
  //     path: `/${path}`,
  //     component: () =>
  //       import (`../pages/${path}`)
  //   })
  // })
  return {
    routes
  }
})())

let history = window.sessionStorage
let routeArray = JSON.parse(history.getItem('routeArray')) || ['/']

router.beforeEach((to, from, next) => {
  Vue.$vux.loading.show('加载中')
  // let toIndex = routeArray.indexOf(to.path)
  // if (toIndex === -1) {
  //   routeArray.push(to.path)
  //   store.commit('updateDirection', true)
  // } else if (to.path !== routeArray[routeArray.length - 1]) {
  //   routeArray = routeArray.slice(0, toIndex + 1)
  //   store.commit('updateDirection', false)
  // } else {
  //   store.commit('updateDirection', true)
  // }
  // history.setItem('routeArray', JSON.stringify(routeArray))
  next()
})

router.afterEach(to => {
  document.title = to.name
  Vue.$vux.loading.hide()
})

router.onError(e => {
  Vue.$vux.alert.show('load page error')
  Vue.$vux.loading.hide()
})

export default router
