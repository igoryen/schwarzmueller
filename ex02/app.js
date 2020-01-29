new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        // 1. inflict random quantity of damage to the monster
        // 2. get damaged
        // 3. finish our turn
        attack: function () {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            if (this.win2()) {
                return;
            }
            this.monsterAttack();
        },
        // inflict more damage than the usual attack
        specialAttack: function () {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage
            });
            if (this.win2()) {
                return;
            }
            this.monsterAttack();
        },
        // restore Health
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            }
            else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });
            this.monsterAttack();
        },
        // restart the game
        giveUp: function () {
            this.gameIsRunning = false;
        },
        monsterAttack: function () {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.win2();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage
            });
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