const app = Vue.createApp({
    // data , function

    // template:"<h2>hello word</h2>"
    data(){
      return{
        title:"Boofe koor",
        author:"sadegh hedayat",
        age:45
      }
    },
    methods:{
      changeTitle(abc){
        // console.log("clicked");
        this.title=abc
      }
    }




  });
  
  app.mount("#app");