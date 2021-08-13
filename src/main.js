import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/Css/global.css'

Vue.config.productionTip = false
Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// axios普通使用方法
// axios({
//   url:"http://egova.top:2930/mock/1034/unity/school/keyPerson/{type}/page",
//   method:"post",

//   // params可以传递参数-----针对get请求的url参数拼接
//   // params:{
//   //   type:"aaaa",
//   //   name:1
//   // }
  
// }).then(res=>{
//   console.log(res.data.result)
// })




// axios封装了,先引入封装好的请求文件
// import request from './service/request'

// 一.使用回调函数
// request({
//   url:"http://egova.top:2930/mock/1034/unity/school/keyPerson/{type}/page",
//   method:"post",
// },res=>{
//   console.log(res)
// },err=>{

// })


// 二.使用promise
// request({
//   url:"http://egova.top:2930/mock/1034/unity/school/keyPerson/{type}/page",
//   method:"post",
// }).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })