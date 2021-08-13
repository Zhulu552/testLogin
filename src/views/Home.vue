<template>
  <div class="home">
    <Layout class="layout">
      <!-- <Header class="header">Welcom</Header> -->

      <!-- 头部组件 -->
      <Cheader v-bind:headerlist="headerlist"></Cheader>
      <Layout>
        <Sider hide-trigger class="sider">
          <!-- <Menu class="menu">
                <Submenu :name="item.name" v-for="item in routerHome" :key="item.name">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        {{item.name}}
                    </template>
                    <MenuItem :name="i.name" v-for="i in item.children" :key="i.name" :to="i.path" replace>
                        <Icon type="ios-apps" />
                        {{i.name}}
                    </MenuItem>
                </Submenu>
          </Menu> -->
          
          <!-- 菜单列表组件 -->
          <Cmenu v-bind:munelist="routerHome"></Cmenu>
        </Sider>
        <Content class="content">
            <!-- <Breadcrumb>
                <BreadcrumbItem to="/home">首页</BreadcrumbItem>
                <BreadcrumbItem>menu101</BreadcrumbItem>
            </Breadcrumb>
            <router-view/> -->
            <Ccontent v-bind:routerList="routerList"></Ccontent>
        </Content>
      </Layout>
      <Cfooter v-bind:footerList="footerList"></Cfooter>
    </Layout>
  </div>
</template>
<script>
import Cmenu from "../components/menu.vue";
import Cheader from "../components/header.vue"
import Ccontent from "../components/content.vue"
import Cfooter from "../components/footer.vue"

export default ({

  name:'home',
  data() {
    return {
      // menu菜单要渲染的，切割了一下的router数组
      routerHome:[],
      // header和footer内部的数据，要传给子组件header
      headerlist:["welcom"],
      footerList:["@2018.08.10"],
      // 当前路由name，传给子组件面包屑
      routerList:''
    }
  },
  methods:{
  },
  // 在生命周期created中获取router数组并把重定向的元素删除，得到新的数组用于渲染列表
  created(){
     for(var i in this.$router.options.routes){
       if(this.$router.options.routes[i].name== "home") {
          this.routerHome.push(this.$router.options.routes[i])
          // console.log(this.routerHome)
       }
      };
  },
  components:{
    Cmenu,
    Cheader,
    Ccontent,
    Cfooter,
  },
  // 监听路由变化，传给content中的面包屑
  watch:{
    $route(to,from){
      this.routerList=to.path
    }
  },
})
</script>

<style scoped>
.home, .layout{
  height: 100%;
}

/* 侧边栏 */
.sider{
  height: 100%;
  color: white;
  background-color: rgba(45, 58, 75, 0.521);
}

.menu{
  width: 100% !important;
  background-color: rgba(45, 58, 75, 0);
}
  
</style>

