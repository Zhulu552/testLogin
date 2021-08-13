import Vue from 'vue'
import Router from 'vue-router'
import menu101 from "./views/menu101"
import menu102 from "./views/menu102.vue"

Vue.use(Router)

const menus =  {
  path: '/home',
  name: 'home',
  component: () => import('./views/Home.vue'),
  redirect:"menu101",
  children:[
    {path:'/menu101', name:'menu101', component: menu101},
    {path:'/menu102', name:'menu102', component: menu102},
  ]
};


const routes = [
  // 路由重定向
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/Login.vue')
  },
  menus
]

const router = new Router({
  routes:routes
})

// 路由导航守卫,登录鉴权
// to表示即将进入的路由
// from表示来的路由
// next是一个必须调用的函数，表示放行。如果next里面有参数路径，就表示强制跳转到那个路径，例如：next("/login")
router.beforeEach((to,from,next)=>{
  if(to.path == "/login") {
    return next();
  }
  else {
    // 获取tocken并判断
    const tockenurl = window.sessionStorage.getItem('tocken')
    if(tockenurl == "one") {
      return next()
    }
    next("/login");
    alert("禁止")
  }
});

export default router
