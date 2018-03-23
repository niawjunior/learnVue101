// v if
new Vue({
  el: '#app',
  data: {
    answer: true,
  }
})
//  v if else
new Vue({
  el: '#app2',
  data: {
    answer: 'A'
  }
})

Vue.component('login', {
  template: `
  <input placeholder="username">
  `
})
Vue.component('logout', {
  template: `
  <p>good bye</p>
  `
})

new Vue({
  el: '#app3',
  data: {
    type: true
  },
  methods: {
    toggle: function() {
      this.type = !this.type
    }
  }
})