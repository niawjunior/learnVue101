var app = new Vue({
  el: '#app',
  data: {
   classObject: {
     active: true,
     'text-danger': true
   }
  }
})
// object syntax
var app2 = new Vue({
  el: '#app2',
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})

// with component
Vue.component('my-component', {
  template: '<h1>hello component</h1>'
})
new Vue({
  el: '#app3'
})

// v-bind:style
var app4 = new Vue({
  el: '#app4',
  data: {
    activeColor: 'red',
    fontSize: 30
  }
})