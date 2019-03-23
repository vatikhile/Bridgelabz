
/**
 * purpose     :  Check string is palindrome. 
 *               
 * @description
 * @file       :  PalindromeUsingQue.js
 * @author     :  Prasanna More
 * @version    :  1.0
 * @since      :  21-2-2019
 * 
 */
try {
    let deque = require("./dequeue");
    let readline = require("readline-sync");
    let input = readline.question("Enter String");
    if (input.length < 1) {
        throw "Enter valid string"
    }
    let dq = new deque.deque();
    let split = input.split("");
    let palindrome = true;
    // add character in queue
    for (let i = 0; i < input.length; i++) {
        dq.addrear(split[i]);
    }
    // check front and rear for palindrome
    while (!dq.isEmpty() && dq.rear != dq.front) {
        if (dq.removeFront() == dq.removeRear()) {
            palindrome = true;
        }
        else {
            palindrome = false;
            break;
        }
    }
    if (palindrome) {
        console.log("String is palindrome")
    }
    else {
        console.log("Not palindrome")
    }
}
catch (err) {
    console.log(err)
}
