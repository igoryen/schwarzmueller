new Vue({
    el: "#app",
    data: {
        title: "Hello World!",
        link: "http://youtube.com",
        finishedLink: '<a href="http://google.com">Google</a>'
    },
    methods: {
        sayHello: function(){
            this.title = "Hola!";
            return this.title;
        }
    }
});