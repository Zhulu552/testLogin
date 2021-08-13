<template>
    <div class="content">
        <Breadcrumb>
            <BreadcrumbItem to="/home">首页</BreadcrumbItem>
            <BreadcrumbItem>{{routerList}}</BreadcrumbItem>
        </Breadcrumb>
        <router-view/>
    </div>
</template>

<script>
export default {
    props:["routerList"]
}
</script>

<style>
.content{
  height: 100%;
}
</style>