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
