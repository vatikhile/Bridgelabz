/**
 * purpose     :  Add person in queue to deposit or withdraw cash and remove after done. 
 *               
 * @description
 * @file       :  Bankers.js
 * @author     :  VAIBHAW
 * @version    :  1.0
 * @since      :  21-2-2019
 * 
 */   var readline = require("readline-sync");

try {
   //let utility = require("./utility");
    let queue= require("./queue");
    let que = new queue.queue();
    let balance = 10000;
 
    // take number of persons to add in queue
    let no_of_person = readline.question("Enter number of person to add in queue");
    if (isNaN(no_of_person)) {
        throw "Enter valid number of person"
    }
    // add persons in queue
    for (i = 1; i <= no_of_person; i++) {
        que.addToQueue("person" + i);
    }
    while (no_of_person > 0) {
        let cash = 0;
        // take choice to deposit or withdraw
        let choice = readline.question("Enter 1 to deposit cash \nEnter 2 to withdraw cash\n");
        switch (choice) {
            case "1":
                // take amount to deposit
                cash = parseInt(readline.question("Enter cash you want to deposit"));
                if (isNaN(cash)) {
                    throw "Enter valid amount"
                }
                //add cash
                if (cash > 0) {
                    balance = balance + cash;
                }
                console.log(queue.removeFromQueue() + " deposited " + cash + " amount");

                no_of_person--;
                break;
            case "2":
                // take amount to withdraw
                cash = parseInt(readline.question("Enter cash you want to withdraw"));
                if (isNaN(cash)) {
                    throw "Enter valid number of amount"
                }
                // remove cash from balance
                if (cash > 0) {
                    balance = balance - cash;
                }
                console.log(queue.removeFromQueue() + " withdrawed " + cash + " amount");
                no_of_person--;
            default:
                console.log("Enter valid choice");
        }

    }
    if (balance > 0) {
        console.log("Balanced " + " and total amount is " + balance);
    }
    else {
        console.log("not balaced " + " and total amount is " + balance);
    }
}
catch (err) {
    console.log(err)
}