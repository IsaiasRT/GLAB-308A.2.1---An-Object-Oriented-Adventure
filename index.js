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

class AdventurerFactory {

    constructor(role) {

        this.role = role;

        this.adventurers = [];

    }

    generate(name) {

        const newAdventurer = new Adventurer(name, this.role);

        this.adventurers.push(newAdventurer);



    }

    findByIndex(index) {

        return this.adventurers[index];

    }

    findByName(name) {

        return this.adventurers.find((a) => a.name === name);

    }

}



const healers = new AdventurerFactory("Healer");

const robin = healers.generate("Robin");




//part 3
class Adventurer extends Character {

    static ROLES = ["Fighter", "Barbarian", "Necromancer", "Healer", "Paladin", "Rogue", "Warlock", "Monk", "Ranger"];

    constructor(name, role) {

        super(name);

        // Adventurers have specialized roles.

        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(
                `Invalid role: ${role}. Valid roles are: ${Adventurer.ROLES.join(", ")}`
            );
        }

        this.role = role;



        // Every adventurer starts with a bed and 50 gold coins.

        this.inventory.push("bedroll", "50 gold coins");

    }

    // Adventurers have the ability to scout ahead of them.

    scout() {

        console.log(`${this.name} is scouting ahead...`);

        super.roll();

    }


    //duel method

    duel(opponent) {
        console.log(`\n Duel begins between ${this.name} and ${opponent.name}!`);

        while (this.health > 50 && opponent.health > 50) {

            const myRoll = Math.floor(Math.random() * 20) + 1;
            const oppRoll = Math.floor(Math.random() * 20) + 1;

            console.log(`${this.name} rolls ${myRoll} | ${opponent.name} rolls ${oppRoll}`);

            if (myRoll > oppRoll) {
                opponent.health -= 1;
                console.log(`${opponent.name} loses 1 health! (${opponent.health} HP left)`);
            } else if (oppRoll > myRoll) {
                this.health -= 1;
                console.log(`${this.name} loses 1 health! (${this.health} HP left)`);
            } else {
                console.log("It's a tie. No damage dealt.");
            }

            console.log("-----");
        }

        const winner = this.health > 50 ? this.name : opponent.name;
        console.log(`The duel is over! Winner: ${winner}\n`);
    }

}

class Companion extends Character {
    constructor(name, type) {

        super(name);

        this.type = type;

        this.companion = null
    }
    assistCall() {
        console.log(`${this.name} the ${this.type} joins the battle!`)
    }
};
/*
const robin = new Character("Robin");

robin.inventory = ["sword", "potion", "artifact"];

robin.companion = new Character("Leo");

robin.companion.type = "Cat";

robin.companion.companion = new Character("Frank");

robin.companion.companion.type = "Flea";

robin.companion.companion.inventory = ["small hat", "sunglasses"];
*/

//const robin = new Adventurer("Robin", "Fighter");
//const brook = new Adventurer("Brook", "Necromancer");
//robin.companion = new Companion("Leo", "Cat");
//robin.companion.companion = new Companion("Frank", "Flea");

//robin.duel(brook);

/*
console.log(robin.companion.companion.roll());

console.log(robin.roll());

console.log(robin.companion.roll());

*/

console.log(robin);



