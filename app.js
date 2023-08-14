const app = Vue.createApp({
    // data , function

    // template:"<h2>hello word</h2>"
    data(){
      return{
        X:0,
        Y:0,
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
        
      },
      //wenn wir ein e im unser function schreiben,
      //bekommt das funktion ein defalte object als parameter.
      handleEvent(e){
        console.log(e);
      },
      handleMouseMove(e){
        this.X=e.offsetX
        this.Y=e.offsetY
      }
    }




  });
  
  app.mount("#app");