
/*****************************************************************************
 * Execution         :   1. default node         cmd> node FlipFlop.js 
 * Purpose            : Flip Coin and print percentage of Heads and Tails 
 * @file                 : FlipFlop.js
 * @overview       : Print the percentage of heads and tails
 * @author  VAIBHAW
 * @version 1.0
 * @since   11-03-2019
 *****************************************************************************/
var Utility = require('../FunctionalProgram/Utility');
var read = require('readline-sync');
//taking the input from user
var flip = read.questionInt("enter no. of times to flip coin:");
//calling the method 
Utility.flipCoin(flip);




