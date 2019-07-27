var characters = [];
var player;
var computer;
var playerHealth = 150;
var computerHealth = 150;
var attackPower = Math.floor(Math.random() * 5);
var playerAttack = math.floor(math.random() * 8);

// select your character
// select the character to attack
// if player is attacked, remove appropriate stamina
// if player attacks, remove appropriate stamina
// if a character is selected, highlight the character and pull from the array.
// if an enemy is selected, then do battle with the opponent.
// if player loses, alert you lose and reset the game
// if player wins, alert you win and reset the game

// if a character is selected, let us know which one it is
function discoverSelected(buttonName) {
    var characters = document.getElementsByName(buttonName);
    for (var i = 0; i < characters.length; i++) {
        if (characters[i].checked) {
            return characters[i].value;
        };
    };
};

// upon attack, reduce health by the attack total

var playerAttack = function () { 
    $(document).on('click', "#attack", function() { playerAttack * attackPower - computerHealth;
    })
};