// 写axios封装,便于后期维护
import axios from "axios"


// 一,使用回调函数的写法
// config是要传入的参数对象,包括url和请求类型
// 传入成功请求方法,回调出去
// 传入失败........
// export default function request(config,success,fail){
//     const internet = axios.create();
//     internet(config)
//     .then(res=>{
//         success(res)
//     })
//     .catch(err=>{
//         fail(err)
//     })
// }




// 二,使用promise
// export default function request(config){
//     return new Promise((resolve,reject)=>{
//         const internet = axios.create();
//         internet(config)
//         .then(res=>{
//            resolve(res)
//         })
//         .catch(err=>{
//            reject(err)
//         })
//     })
// }

// 三,直接return,因为我们的internet有.then.catch.其实就是一个promise......axios就是对promise的封装
export default function request(config){
    const internet = axios.create();
    return internet(config)
}



 //三.async await




