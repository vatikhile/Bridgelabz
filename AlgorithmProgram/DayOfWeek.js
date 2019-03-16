

var Utility =require('./Utility');

var read = require('readline-sync');
//take the input form user
var m=read.question("Enter the month : ")
var d=read.question("Enter the day : ")
 var y= read.question("Enter the year : ")
var num=Utility.dayOfWeek(d, m, y) 
var arr=["Monday","Tuesday","Wensday","Thusday","Friday","Saturday","Sunday"];
//check condition num is greater than
if(num >=0)
{
    console.log("day falls on : "+arr[num])
}
else
{
     console.log ("invaild value")
}
       