import inquirer from 'inquirer';
import chalk from 'chalk';
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: " Please Enter Your Name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: " Please Select Your Opponent:",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: " Please Select Your Opponent:",
            choices: ["Attack", "Drink Portion", "Run For Your Life"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num < 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.redBright(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.yellowBright(`${o1.name} Fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(`You Loose Your Battle, Better Luck Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.redBright(`${o1.name} Fuel is ${o1.fuel}`));
                console.log(chalk.bold.yellowBright(`${p1.name} Fuel is ${p1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(`Congratulation You Win The Battle`));
                    process.exit();
                }
                if (ask.option == "Drink Portion") {
                    p1.fuelIncrease();
                    console.log(chalk.bold.italic.greenBright(`Lets Have a Energy Drink To Recharge Your Fuel is ${p1.fuel}`));
                }
                if (ask.option == "Run For Your Life") {
                    console.log(chalk.red.bold.italic(`You Loose Your Battle, Better Luck Next Time`));
                    process.exit();
                }
            }
        }
    }
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: " Please Select Your Opponent:",
            choices: ["Attack", "Drink Portion", "Run For Your Life"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num < 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.redBright(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.yellowBright(`${o1.name} Fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(`You Loose Your Battle, Better Luck Next Time`));
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.redBright(`${o1.name} Fuel is ${o1.fuel}`));
                console.log(chalk.bold.yellowBright(`${p1.name} Fuel is ${p1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(`Congratulation You Win The Battle`));
                }
                if (ask.option == "Drink Portion") {
                    p1.fuelIncrease();
                    console.log(chalk.bold.italic.greenBright(`Lets Have a Energy Drink To Recharge Your Fuel is ${p1}`));
                }
                if (ask.option == "Run For Your Life") {
                    console.log(chalk.red.bold.italic(`You Loose Your Battle, Better Luck Next Time`));
                }
            }
        }
    }
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: " Please Select Your Opponent:",
            choices: ["Attack", "Drink Portion", "Run For Your Life"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num < 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.redBright(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.yellowBright(`${o1.name} Fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(`You Loose Your Battle, Better Luck Next Time`));
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.redBright(`${o1.name} Fuel is ${o1.fuel}`));
                console.log(chalk.bold.yellowBright(`${p1.name} Fuel is ${p1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(`Congratulation You Win The Battle`));
                }
                if (ask.option == "Drink Portion") {
                    p1.fuelIncrease();
                    console.log(chalk.bold.italic.greenBright(`Lets Have a Energy Drink To Recharge Your Fuel is ${p1}`));
                }
                if (ask.option == "Run For Your Life") {
                    console.log(chalk.red.bold.italic(`You Loose Your Battle, Better Luck Next Time`));
                }
            }
        }
    }
} while (true);
