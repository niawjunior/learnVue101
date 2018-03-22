var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question',
    img: ''
  },
  watch: {
    question: function(newQuestion, oldQuestion) {
      this.answer = 'Waiting for you top tryping...',
      this.getAnswer()
    }
  },
  methods: {
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === 1) {
          this.answer = 'Question usually contain a question mask. ;-'
          return 
        }
        this.answer = 'Think...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
            console.log(response.data)
            vm.img = response.data.image
          })
          .catch(function (error) {
            vm.answer = 'Error Cound no reach  the API'
          })
      },
      500
    )
  }
})