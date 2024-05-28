#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 20000;//Dolar
let myPin = 7774;

let pinAnswer = await inquirer.prompt([{  
    name: "pin",
    message: "enter your pin",
    type:"number"

}]);
if(pinAnswer.pin === myPin) { console.log("correct pin code!!!");

let operationAns = await inquirer.prompt([{
    name: "operation",
    message: "please select options",
    type: "list",
    choices: ["withdraw","check balance"]
}]); 



if (operationAns.operation ==="withdraw"){
    let amountAns = await inquirer.prompt([{
        name: "amount",
        message: "enter your amount",
        type:"number",
    }]);

 myBalance -= amountAns.amount;
console.log("your remaining balance is:"+ myBalance)}

else if (operationAns.operation=== "check balance")
    console.log("your balance is " + myBalance)

}

else { console.log("incorrect pin number");}