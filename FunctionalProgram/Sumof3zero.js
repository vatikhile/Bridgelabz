
   /******************************************************************************
 *  Execution         :   1. default node         cmd> node Sumof3zero.js 
 *  Purpose            : A program with cubic running time. Read in N integers and counts the   number of triples that sum to exactly 0.
 *
 *  @file                 : Sumof3zero.js
 *  @overview       : distinct triplets as well as the second output is to print the distinct triplets.
 *  @author          :VAIBHAW
 *  @version         : 1.0
 *  @since             : 13/03/2019
 *
 ******************************************************************************/
var Utility =require('./Utility');
var read = require('readline-sync');
var array =[3,2,-5,3,-1,-3,0];
//calling the method
Utility.sum(array);
