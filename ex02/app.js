new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        // 1. inflict random quantity of damage to the monster
        // 2. get damaged
        // 3. finish our turn
        attack: function () {
            var max = 10;
            var min = 3;
            // get random number between 3 and 10
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHealth -= damage;

            if (this.monsterHealth <= 0) {
                alert("You won!");
                this.gameIsRunning = false;
            }

            max = 12;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealth -= damage;

            if (this.playerHealth <= 0) {
                alert("You lost!");
                this.gameIsRunning = false;
            }

        },
        // inflict more damage than the usual attack
        specialAttack: function () {

        },
        // restore Health
        heal: function () {

        },
        // restart the game
        giveUp: function () {

        }
    }
});