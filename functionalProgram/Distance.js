/*****************************************************************************
 * Execution         :   1. default node         cmd> node Distance.js 
 * Purpose             : prints the Euclidean distance from the point (x, y) to the origin (0, 0). The formulae to calculate distance = sqrt(x*x + y*y)
 *  @file                 : Distance.js
 *  @overview       : print distance between x and y coordinator
 *  @author  VAIBHAW
 *  @version 1.0
 *  @since   13-03-2019
 *****************************************************************************/
var Utility = require('./Utility');
var read = require('readline-sync');
//taking the input from the user
var x = read.question("Enter the value of x :");
var y = read.question("Enter the value of y :");
//calling the method
Utility.getDistance(x, y);