export default {
    addition(state){
        state.counter--
      },
      additionuser(state,count) {
        state.counter+=count
      },
      zujianfun(state){
        state.counter*=state.counter
      }
}