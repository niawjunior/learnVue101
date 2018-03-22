new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  beforeCreate() {
    console.log('Nothing gets called before me!')
  },
  updated() {
    // Fired every second, should always be true
    console.log(this.counter)
  },
  created() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
})