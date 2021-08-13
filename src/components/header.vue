<template>
  <Header class="header">
    <div class="welcom">{{headerlist[0]}}</div>
    <Button type="primary" class="outbtn" @click="outbtn">注销</Button>
  </Header>
</template>

<script>
export default {
    props:["headerlist"],
    methods:{
      outbtn:function(){
        this.$router.push("/login");
        window.sessionStorage.removeItem("tocken")
      }
    }
}
</script>

<style>
.header{
  height: 80px;
  color: rgb(190, 190, 190);
  text-align: center;
  background-color: rgb(45,58,75);
} 

.welcom{
  float: left;
  width: 15%;
  margin:0px !important;
  font-size: 50px;
}
.outbtn{
  width: 80px;
  float: right;
  color: white;
  background-color: rgb(45,58,75);
  border: solid 1px white;
  margin-top: 25px;
}
</style>