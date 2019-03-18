/******************************************************************************
 *  Execution       :   1. default node         cmd> node TwoDArray.js 
 *  Purpose         : Print function to print 2 Dimensional Array. 
 *  @file                 : TwoDArray.js
 *  @overview       : A library for reading in 2D arrays of integers, doubles, or booleans from standard input and printing them out to standard output.
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 13/03/2019
 *
 ******************************************************************************/
var Utility = require('./Utility');
var read = require('readline-sync');
//taking the input from user
var row = read.question('enter size of row ');
var column = read.question('enter size of column ');
Utility.array(row, column)



    