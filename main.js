new Vue({
    el: "#app",
    data: {
        name: "Igor",
        counter: 0,
        x: 0,
        y: 0,
        title: "Hello World!",
        link: "http://youtube.com",
        finishedLink: '<a href="http://google.com">Google</a>'
    },
    methods: {
        increase: function( step, event ){
            this.counter += step;
        },
        alertMe: function() {
            alert('Alert!');
        },
        updateCoordinates: function( event ) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        sayHello: function(){
            this.title = "Hola!";
            return this.title;
        }
    }
});