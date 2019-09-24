new Vue({
    el: "#app",
    data: {
        title: "Hello World!",
        link: "http://youtube.com"
    },
    methods: {
        sayHello: function(){
            return this.title;
        }
    }
});