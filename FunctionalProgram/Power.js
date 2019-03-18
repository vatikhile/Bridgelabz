/*****************************************************************************
*  Execution         :   1. default node         cmd> node Power.js  
*Purpose              : his program takes a command-line argument N and prints a table of the powers of 2 that are less than or equal to 2^N.
 * @file                 : Power.js
 * @overview       : print power of two .
 * @author  VAIBHAW
 *  @version 1.0
 *  @since   11-03-2019
 *****************************************************************************/
var Utility = require('./Utility');
var read = require('readline-sync');
//taking the input from user
var num = read.question("enter the number :");
//calling the power method
Utility.power(num);
