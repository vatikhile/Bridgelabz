/**
 * purpose     :  Check Arithmathic Expression is having balanced paranthethis. 
 *               
 * @description
 * @file       :  stackParanthis.js
 * @author     :  VAIBHAW
 * @version    :  1.0
 * @since      :  21-2-2019
 * 
 */
try {
    // let utility = require("./utility");
    let stack = require("./stack")
    let readline = require("readline-sync");
    let expression = readline.question("Enter Arithmatic Expression");
    let ss = new stack.stack();
    let ArithmaticExpression = expression.split("");
    for (let i = 0; i < ArithmaticExpression.length; i++) {
        // push in stack if "("
        if (ArithmaticExpression[i] == '(') {
            ss.push('(');
        }
        // pop if ")"
        else if (ArithmaticExpression[i] == ')') {
            // if stack is empty and ")"
            if (ss.isEmpty()) {
                ss.push(')');
                break;
            }
            ss.pop();
        }
    }
    if (ss.isEmpty()) {
        console.log("Balanced");
    }
    else {
        console.log("Not balanced");
    }
}
catch (err) {
    console.log(err);
}