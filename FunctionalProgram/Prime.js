/*****************************************************************************
 *Execution         :   1. default node         cmd> node Prime.js 
 * Purpose           : Computes the prime factorization of N using brute force.
 *  @file                 : Prime.js
 *  @overview       : print Prime Factors
 *  @author  VAIBHAW
 *  @version 1.0
 *  @since   12-03-2019
 *****************************************************************************/

var Utility = require('./Utility');
var read = require('readline-sync');
//taking the input from the user
var num = read.questionInt("enter the number: ");
//calling the method
Utility.primeFactor(num);
