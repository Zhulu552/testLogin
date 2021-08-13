// module.exports = {
//   plugins: {
//     autoprefixer: {}
//   }
// }
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 80,//结果为：设计稿元素尺寸/100，比如元素宽320px,最终页面会换算成 3.2rem
      propList: ['*']
    }
  }
}