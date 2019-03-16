var Utility =require('./Utility');
var readlineSync = require('readline-sync');
console.log("enter value for v between 3-120 and less than 50 for t: ");

var  t= readlineSync .question("Enter the value of t :");
var  v= readlineSync .question("Enter the value of v :");
Utility.windChill(t,v)