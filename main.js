#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pincode!!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "enter your amount",
                type: "number",
            }]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is :" + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your current balance is :" + myBalance);
    }
}
else {
    console.log("incorrect pincode");
}
