<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头部 -->
      <div class="header">
          <h3>系统登录</h3>
      </div> 
      <!-- 表单内容部分  
      model动态绑定输入内容。
      rules绑定验证规则，验证输入内容是否符合规范，例如是否超出字数限制
      ref绑定表单的引用对象，可以“this.$refs.ref值”直接调用各种方法，比如重置，比如校验（提交给后台之前都最好是校验一下） -->
      <Form :model="loginFrom" :label-width="0" :rules="loginFormRules" ref="loginFormRef">
        <!-- 账号 -->
        <FormItem  prop="username">
          <Input type="text" prefix="ios-contact" v-model="loginFrom.username"></Input>
        </FormItem>

        <!-- 密码 --1>
        <FormItem  prop="password" class="pasItem">
          <!-- 动态绑定type1111 -->
          <Input :type="this.pwdtype" prefix="md-lock" v-model="loginFrom.password"></Input>
          <!-- 密码的眼睛图标 -->
          <Icon type="md-eye" :class="{'eyeoff':!flagEyes}" class="iconEye" @click="eyes"/>
          <Icon type="md-eye-off" :class="{'eyeoff':flagEyes}" class="iconEye" @click="eyes"/>
        </FormItem>

        <!-- 按钮 -->
        <FormItem>
          <Button type="primary" @click="Submit()" class="sub">登录</Button>
        </FormItem>
      </Form> 
      <!-- 文字部分：账号密码 -->
      <div class="oth">
        <div class="text">
          <div>账号:admin   密码:123456</div>
          <div>账号:editor  密码:123456</div>
        </div>
        <div class="othsub" @click="othersub">第三方登录</div>
      </div>
    </div>   
  </div>
</template>
<script>
export default {
  name: 'login',
  // 组件中也有data属性，但是要写出有返回值的方法的形式
  data() {
    return {
      flagEyes: false,
      pwdtype: "password",
      // 登录绑定的表单数据
      loginFrom: {
        username: "admin",
        password: "123456"
      },
      // 表单验证规则
      loginFormRules: {
        username: [
          { required: true, message: '账号不能为空', trigger: 'blur' },
          { min: 4,max: 8, message: '长度在4~8之间', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 4,max: 8, message: '长度在4~8之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击第三方按钮
    othersub: function() {
      alert("不支持第三方~~~~")
    },
    // 密码框与眼睛图标的点击变化
    eyes: function() {
      this.flagEyes = !this.flagEyes;
      if(this.flagEyes == true) {
        this.pwdtype = "text"
      }
      else {
        this.pwdtype = "password"
      }
    },
    // 表单提交验证
    Submit: function() {
      this.$refs.loginFormRef.validate(value=>{
        if(value ==true) {
          if(this.loginFrom.username == "admin" &&this.loginFrom.password == "123456") {
            // console.log("登录")
            // 设置一个假的tocken
            window.sessionStorage.setItem("tocken","one")

            // 登陆成功就跳转路由
            this.$router.push("/home")
          }
          else if(this.loginFrom.username == "editor" &&this.loginFrom.password == "123456") {
            window.sessionStorage.setItem("tocken","one")
            this.$router.push("/home")
          }
          else {
            alert("账号或密码错误~~~")
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.login_container{
   background-color: rgb(45,58,75);
   height: 100%;
}
.login_box{
  width: 520px;
  height: 480px;
  margin: auto;
  padding: 160px 35px 0 35px;
  position: relative
}
.header{
  margin: 0 0 40px 0;
        }
.header h3{
  width: 100%;
  color: white;
  font-size: 26px;
  text-align: center;
  display: inline-block
}
/* 表单部分 */
/* input框 */
/* .inpItem{
  background-color: rgb(40,52,67);
  border: solid 1px rgb(60,71,86);
  border-radius: 7px;
  height: 50px;
} */
/* 密码显示隐藏 */
.pasItem{
  position: relative
}
.iconEye{
  position: absolute;
  right: 10px;
  top: 10px;
}
.eyeoff{
  display: none;
}

/* 登录按钮 */
.sub{
  width: 100%;
  font-size: 14px;
}

/* 表格下方文字 */
.oth .text{
  float: left;
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
}
.othsub{
  float:right;
  font-size: 14px;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  background-color: rgb(24,144,255);
}


</style>
