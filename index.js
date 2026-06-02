const adventurer = {

    name: "Robin",

    health: 10,

    inventory: ["sword", "potion", "artifact"],

    companion: {
        name: "Leo",
        type: "Cat",

        companion: {
            name: "Frank",
            type: "Flea",
        }
    },

    roll(mod = 0) {

        const result = Math.floor(Math.random() * 20) + 1 + mod;

        console.log(`${this.name} rolled a ${result}.`)

    }

}


/*
for (i = 0; i < 3; i++) {
    console.log(adventurer.inventory[i])
}
*/

class Character {

    static MAX_HEALTH = 100;

    constructor(name) {

        this.name = name;



        this.health = 100;

        this.inventory = [];

    }

    roll(mod = 0) {

        const result = Math.floor(Math.random() * 20) + 1 + mod;

        console.log(`${this.name} rolled a ${result}.`)

    }

}


//part 3
class Adventurer extends Character {

    static ROLES = ["Fighter", "Barbarian", "Necromancer", "Healer", "Paladin", "Rogue", "Warlock", "Monk", "Ranger"];

    constructor(name, role) {

        super(name);

        // Adventurers have specialized roles.

        this.role = ROLES;



        // Every adventurer starts with a bed and 50 gold coins.

        this.inventory.push("bedroll", "50 gold coins");

    }

    // Adventurers have the ability to scout ahead of them.

    scout() {

        console.log(`${this.name} is scouting ahead...`);

        super.roll();

    }

}

class Companion extends Character {
    constructor(name, role, type) {

        super(name);

        this.role = role;

        this.type = type;

    }
}
/*
const robin = new Character("Robin");

robin.inventory = ["sword", "potion", "artifact"];

robin.companion = new Character("Leo");

robin.companion.type = "Cat";

robin.companion.companion = new Character("Frank");

robin.companion.companion.type = "Flea";

robin.companion.companion.inventory = ["small hat", "sunglasses"];
*/

const robin = new Adventurer("Robin");
robin.companion = new Companion("Leo");
robin.companion.companion = new Companion("Frank");


/*
console.log(robin.companion.companion.roll());

console.log(robin.roll());

console.log(robin.companion.roll());

*/

console.log(robin);



