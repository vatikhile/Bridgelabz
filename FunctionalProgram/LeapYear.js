var Utility =require('./Utility');
var read =require('readline-sync');

var year =read.questionInt("enter the year:");
var len=""+year
 if(len.length==4)
{
    Utility.leapYear(year);

}
else
{
console.log('It is Not four digit (year)');
}
