<template>
  <Footer class="footer">
    {{footerList[0]}}
  </Footer>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:["footerList"]
}
</script>

<style>
.footer{
  font-size: 20px;
  text-align: center;
}
</style>