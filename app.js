const app = Vue.createApp({
    // data , function

    // template:"<h2>hello word</h2>"
    data(){
      return{
        title:"Boofe koor",
        author:"sadegh hedayat",
        age:45,
        showText:true
      }
    },
    methods:{
      changeTitle(abc){
        // console.log("clicked");
        this.title=abc
      },
      changeShowText(){
        this.showText= !this.showText
      }
    }




  });
  
  app.mount("#app");