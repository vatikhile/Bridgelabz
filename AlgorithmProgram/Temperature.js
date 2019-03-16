

  
var Utility =require('./Utility/');

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