import Vuex from "vuex";
import Vue from "vue";
// 安装方式和router差不多，也要在main中挂载
// 其他文件要使用属性，通过$store.stata
Vue.use(Vuex)

// 全部抽离出来
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
import moduleA from "./modules/moduleA";


export default new Vuex.Store({
    // 属性
    state: {
      // 通过this.$store.state.counter调用
      counter: 10
    },
  
    // 普通方法，同步操作，是更新状态的唯一方式
    // 1.先在mutation中定义方法  addition
    // 2.在其他方法中使用      this.$store.commit("addition")
    // 3.可以接收子组件传过来的参数
    mutations,
  
    // 异步方法，类似于mutation，需要使用mutation来进行更改状态
    // 也有传参，context：上下文。理解为store对象
    // 1.在组件的方法中使用dispatch传给actions
    // 2。在action中使用commit传给mutation
    // 3.在mutation中接收
    actions,
  
    // getters,全局计算属性
    // 把state当作参数传入
    // 例如：在其他地方直接$store.getters.powerCounter
    getters,
  
  
  // 模块化，每个模块可以拥有自己的state，mutations，actions，getters等
  // 例如下面的a模板，其实是被store放在state里面了，其他组件需要使用则$store.state.a.name
    modules:{
      moduleA
    }
  })
  