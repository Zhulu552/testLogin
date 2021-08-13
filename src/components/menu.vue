<template>
    <Menu class="menu">
        <Submenu :name="item.name" v-for="item in munelist" :key="item.name">
            <template slot="title">
                <Icon type="ios-paper" />
                {{item.name}}
            </template>
            <MenuItem :name="i.name" v-for="i in item.children" :key="i.name" :to="i.path" replace @>
                <Icon type="ios-apps" />
                {{i.name}}
                <!-- {{window.location.href}} -->
                </MenuItem>
            </Submenu>
    </Menu>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:["munelist"]
}
</script>

<style>

</style>