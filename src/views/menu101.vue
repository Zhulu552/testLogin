<template>
  <div class="menu101">
      <div class="card">
        <Card :bordered="false" class="content">
          <div>{{$store.state.counter}}</div>
          <h2>-------counter--------</h2>
          <div>{{$store.getters.powerCounter}}</div>
          <h2>---------十倍数据-------------</h2>
          <button @click="addcounter">减去一</button>
          <div><button @click="adduser(count)">自定义增加{{count}},传数据</button></div>

          <br>
          <br>
          <button @click="zujianfun">异步操作:平方</button>
          <br>
          <h2>--------------------------------</h2>
          <h2>这是模块化的a模块中的name:{{$store.state.moduleA.name}}</h2>
        </Card>
    </div>
  </div>
</template>

<script>
export default {
    name:"menu101",
    data(){
      return{
        count:5
      }
      },
    methods:{
      addcounter() {
        this.$store.commit("addition")
      },
      adduser(count) {
        this.$store.commit("additionuser",count)
      },
      zujianfun(){
        this.$store.dispatch("yibu")
      }
    }
}
</script>

<style>
.menu101{
  height: 97%;
}
.card{
  background:#eee;
  padding: 20px;
  height: 100%;
}
.content{
  height: 100%;
}
</style>