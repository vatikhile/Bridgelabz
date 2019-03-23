/*****************************************************************************
 *Execution         :   1. default node         cmd> node HarmonicNumber.js 
 * Purpose: Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
 * @file                 : HarmonicNumber.js
 * @overview       : print harmonic number
 * @author  VAIBHAW
 *  @version 1.0
 *  @since   12-03-2019
 *****************************************************************************/
var Utility = require('./Utility');
var read = require('readline-sync');
//taking the input from user
var num = read.questionInt("Enter the Nth harmonic number: ");
//check the condition number is greater than 0
if (num > 0) {
    Utility.harmonicNumber(num);
}
else {
console.log("The number should be greater than zero");
}

