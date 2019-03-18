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

var read = require('readline-sync');
var choice= read .question("1. Celsius to Fahrenheit:\n2.Fahrenheit to Celsius \nenter The choice:");

if(choice==1)
{
var celsius= read .question("enter The temperature:");

 Utility.convertToF(celsius);
}
if(choice==2)
{
 var fahrenheit= read .question("enter The temperature:");
 Utility.convertToT(fahrenheit);
}