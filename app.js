new Vue({
  el: "#vue-app",
  data: {
    name: "James"
  },
  methods: {
    greet: function(){
      return "Greetings" + " " + this.name
    },
  }
});