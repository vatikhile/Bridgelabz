
var Utility =require('./Utility');
var read = require('readline-sync');
var size =read.question("enter the size of array");
var arr1 = [];
for(var i =0 ;i<size;i++)
{
 arr1[i]=read.question("enter the element ")


}

Utility.bubbleSortString(arr1);