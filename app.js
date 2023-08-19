const app = Vue.createApp({
    // data , function

    // template:"<h2>hello word</h2>"
    data(){
      return{
        url:"http://www.google.com",
        books:[
          {title:"book1",author:"author1",image:"./images/book1.jpg",isFav:true},
          {title:"book2",author:"author2",image:"./images/book2.jpg",isFav:false},
          {title:"book3",author:"author3",image:"./images/book1.jpg",isFav:true},
        ],
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