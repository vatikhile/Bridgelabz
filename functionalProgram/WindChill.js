/******************************************************************************
 *  Execution         :   1. default node         cmd> node WindChill.js 
 *  Purpose            :  Takes two  command-line arguments t and v and prints the wind chill. Use Math.pow(a, b) to compute ab. 
 *
 *  @file                 : WindChill.js
 *  @overview       : temperature t (in Fahrenheit) and the wind speed v (in miles per hour), the National Weather Service defines the effective temperature (the wind chill) to 
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 15/03/2019
 *
 ******************************************************************************/
var Utility =require('./Utility');
var read = require('readline-sync');
console.log("enter value for v between 3-120 and less than 50 for t: ");
//taking the input from the user
var  t= read .question("Enter the value of t :");
var  v= read .question("Enter the value of v :");
Utility.windChill(t,v)