  
/******************************************************************************
 *  Execution       :   1. default node         cmd> node InsertionSortInt.js 
 *  Purpose         : prints the sorted order number
 *
 *  @file                 : InsertionSortInt.js
 *  @overview       : InsertionSort method for integer
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 15/03/2019
 *
 ******************************************************************************/var Utility =require('./Utility');
var read = require('readline-sync');
//var inputArray= ["Banana", "Orange", "Apple", "Mango"];
var size =read.question("enter the size of array");
var arr = [];
for(var i =0 ;i<size;i++)
{
 arr[i]=read.questionInt("enter the element ")


}
Utility.insertionSortInt(arr);