
var Utility =require('./Utility');
var read = require('readline-sync');
//var inputArray= ["Banana", "Orange", "Apple", "Mango"];
var size =read.question("enter the size of array");
var arr = [];
for(var i =0 ;i<size;i++)
{
 arr[i]=read.questionInt("enter the element ")


}
Utility.insertionSortInt(arr);