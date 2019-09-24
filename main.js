new Vue({
    el: "#app",
    data: {
        counter: 0,
        title: "Hello World!",
        link: "http://youtube.com",
        finishedLink: '<a href="http://google.com">Google</a>'
    },
    methods: {
        increase: function(){
            this.counter++;
        },
        sayHello: function(){
            this.title = "Hola!";
            return this.title;
        }
    }
});