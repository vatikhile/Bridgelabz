/******************************************************************************
 *  Execution       :   1. default node         cmd> node Temperature.js 
 *  Purpose         : TemperaturConversion  given the temperature in fahrenheit as input outputs the temperature in Celsius or viceversa using the formula
 *
 *  @file                 : Temperature.js
 *  @overview       : Temperature in fahrenheit as input outputs the temperature in Celsius or viceversa 
 *  @author          : VAIBAHW
 *  @version         : 1.0
 *  @since             : 16/03/2019
 *
 ******************************************************************************/var Utility =require('./Utility/');


var Utility =require('./Utility');
var read=require('readline-sync')
var tem=read.question("Enter 0 for Celsius or 1 for Farenheit to calculate the CTOF or FTOC")
Utility.tempraturecon(tem);
   