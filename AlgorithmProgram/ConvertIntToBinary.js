/******************************************************************************
 *  Execution       :   1. default node         cmd> node ConvertInttoBinary.js 
 *  Purpose         : outputs the binary (base 2) representation of the decimal number typed as the input
 *
 *  @file                 : ConvertInttoBinary.js 
 *  @overview       : prints the decimal number to binary form
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 15/03/2019
 *
 ******************************************************************************/
var Utility =require('./Utility');

var read = require('readline-sync');
var num= read .questionInt("enter The number:");

Utility.toBinary(num);
