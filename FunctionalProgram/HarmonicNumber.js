var Utility =require('./Utility');
var read =require('readline-sync');

var num=read.questionInt("Enter the Nth harmonic number: ");
if(num>0)
 { 
Utility.harmonicNumber(num);
 
 }
else
{

    console.log("The number should be greater than zero")
}

