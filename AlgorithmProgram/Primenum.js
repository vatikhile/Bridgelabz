/******************************************************************************
 *  Execution       :   1. default node         cmd> node Primenum.js 
 *  Purpose         : prints the prime Number upto 1000
 *
 *  @file                 : Primenum.js
 *  @overview       : prints the prime number upto 1000
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 16/03/2019
 *
 ******************************************************************************/
var Utility =require('./Utility');

var read = require('readline-sync');
var number= read.question("enter The Number:");



    Utility.getPrimeNumber(number);

