<template>
  <div class="menu102">
    <div class="card">
      <Card :bordered="false" class="content">
        <!-- 表格，columns动态绑定标头，data绑定数据 -->
        <Table border :columns="columns1" :data="data1"></Table>
      </Card>
    </div>
  </div>
</template>

<script>
import request from "../service/request"

export default {
  name: "menu102",
  data() {
    return {
      columns1: [],
      data1: []
    };
  },
  created(){
    // 在生命周期函数,组件创建时调用获取数据的get方法
    this.getTable()
  },
  methods:{
    // 获取数据的get方法
    getTable: function(){
      request({
        url:"http://egova.top:2930/mock/1034/unity/school/keyPerson/{type}/page",
        method:"post",
      }).then(res=>{
        // console.log(res.data)
        this.columns1 = res.data.culm
        this.data1 = res.data.result
      }).catch(err=>{
        console.log(err)
      })
    }
  }
};
</script>

<style>
.menu102 {
  height: 97%;
}
.card {
  background: #eee;
  padding: 20px;
  height: 100%;
}
.content {
  height: 100%;
}
</style>