new Vue({
    el: "#app",
    data: {
        ingredients: ['meat', 'fruit', 'cookies'],
        persons: [
            { name: 'Igor', age: '44', color: 'blue'},
            { name: 'Jenica', age: 'unknown', color: 'green'}
        ],
        insert: true, // 3
        width: 200,
        tint: "feta", // 2
        toggleColor: false,
        altitude: 0,
        secondAltitude: 0,
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
    computed: {
        myStyle: function(){
            return {
                backgroundColor: this.tint,
                width: this.width + 'px'
            }
        },
        bkgColorToggle: function() {
            return {
                sail: this.toggleColor,
                feta: !this.toggleColor
            };
        },
        lowhigh: function(){
            return this.altitude < 3 ? "Low" : "High!";
        }
    },
    watch: {
        altitude: function( value ){
            var vm = this; // 1
            setTimeout( function(){
                vm.altitude = 0;
            }, 2000 );
        }
    },
    methods: {
        highlow() {
            return this.altitude < 3 ? "Low" : "High!"
        },
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