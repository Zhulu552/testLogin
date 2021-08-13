// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   // 属性
//   state: {
//     // 通过this.$store.state.counter调用
//     counter: 10
//   },

//   // 普通方法，同步操作，是更新状态的唯一方式
//   // 1.先在mutation中定义方法  addition
//   // 2.在其他方法中使用      this.$store.commit("addition")
//   // 3.可以接收子组件传过来的参数
//   mutations: {
//     addition(state){
//       state.counter--
//     },
//     additionuser(state,count) {
//       state.counter+=count
//     },
//     zujianfun(state){
//       state.counter*=state.counter
//     }
//   },

//   // 异步方法，类似于mutation，需要使用mutation来进行更改状态
//   // 也有传参，context：上下文。理解为store对象
//   // 1.在组件的方法中使用dispatch传给actions
//   // 2。在action中使用commit传给mutation
//   // 3.在mutation中接收
//   actions: {
//     yibu(context) {
//       setTimeout(() => {
//         context.commit("zujianfun")
//       }, 2000 );
//     }

//   },

//   // getters,全局计算属性
//   // 把state当作参数传入
//   // 例如：在其他地方直接$store.getters.powerCounter
//   getters:{
//     powerCounter(state){
//       return state.counter*10
//     }
//   },


// // 模块化，每个模块可以拥有自己的state，mutations，actions，getters等
// // 例如下面的a模板，其实是被store放在state里面了，其他组件需要使用则$store.state.a.name
//   modules:{
//     a:{
//       state:{
//         name:"qqqq"
//       },
//       mutations:{},
//       actions:{},
//       getters:{},
//     }
//   }
// })
