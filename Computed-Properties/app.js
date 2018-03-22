var app = new Vue({
  el: '#app',
  data: {
    original_message: 'hello'
  },
  computed: {
    reverse_message: function() {
      return this.original_message.split('').reverse().join('')
    }
  },
  methods: {
    reverse_message_using_function: function() {
      return this.original_message.split('').reverse().join('')
    }
  },

})

var app2 = new Vue({
  el: '#app2',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})