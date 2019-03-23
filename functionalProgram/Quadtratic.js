
/******************************************************************************
 *  Execution         :   1. default node         cmd> node Quadratic.js 
 *  Purpose            : Given N distinct Coupon Numbers, how many random numbers do you need to generate distinct coupon number?
 *
 *  @file                 : Quadratic.js
 *  @overview       : Calculate the quadratic equation
 *  @author          :VAIBHAW
 *  @version         : 1.0
 *  @since             : 14/03/2019
 *
 ******************************************************************************/
var Utility = require('./Utility');
var read = require('readline-sync');
//taking the input from the user 
var a = read.question("Enter the value of a :");
var b = read.question("Enter the value of b :");
var c = read.question("Enter the value of c :");
Utility.findRooteOfEquation(a, b, c)    