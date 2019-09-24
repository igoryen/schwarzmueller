new Vue({
    el: "#app",
    data: {
        age: 0,
        majority: '',
        name: "Igor",
        counter: 0,
        x: 0,
        y: 0,
        title: "Hello World!",
        link: "http://youtube.com",
        finishedLink: '<a href="http://google.com">Google</a>'
    },
    methods: {
        increaseAge: function(){
            this.age++;
            this.majority = this.age < 18 ? "Minor" : 'Of age'
        },
        decreaseAge: function(){
            this.age--;
            this.majority = this.age < 18 ? "Minor" : 'Of age'
        },
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