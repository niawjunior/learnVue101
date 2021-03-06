  var app = new Vue({
    el: '#app',
    data: {
      message: 'hello'
    }
  })
  var app2 = new Vue({
    el: '#app2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })
  var app3 = new Vue({
    el: '#app3',
    data: {
      seen: true,
      message: 'hello world'
    }
  })
  var app4 = new Vue({
    el: '#app4',
    data: {
      todos: [
      {
        text: 'learn javascript'
      },
      {
        text: 'learn php',
      },
      {
        text: 'learn react'
      },
      {
        text: 'learn python'
      }
      ]
    }
  })
  
  var app5 = new Vue({
    el: '#app5', 
    data: {
      message: 'hello world'
    },
    methods: {
      reverseMessage: function() {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

  var app6 = new Vue({
    el: '#app6',
    data: {
      message: 'hello world'
    }
  })

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app7',
    data: {
      List: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  })