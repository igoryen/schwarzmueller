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

            this.monsterHealth -= this.calculateDamage(3, 10);

            if (this.win2()) {
                return;
            }

            this.playerHealth -= this.calculateDamage(5, 12);

            this.win2();

        },
        // inflict more damage than the usual attack
        specialAttack: function () {

        },
        // restore Health
        heal: function () {

        },
        // restart the game
        giveUp: function () {

        },
        calculateDamage: function (min, max) {
            // get random number between {min} and {max} 
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        // win2 = "Win?" - check if you have won yet
        win2: function () {
            if (this.monsterHealth <= 0) {
                if (confirm("You win! Play again?")) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;

            }
            else if (this.playerHealth <= 0) {
                if (confirm("You lose! Play again?")) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
        }
    }
});