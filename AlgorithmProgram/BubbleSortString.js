/******************************************************************************
 *  Execution       :   1. default node         cmd> node BubbleSorttring.js 
 *  Purpose         : prints the sorted order string
 *
 *  @file                 :BubbleSortString.js
 *  @overview       : Bubble Sort method for string
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 15/03/2019
 *
 ******************************************************************************/
var Utility =require('./Utility');
var read = require('readline-sync');
var size =read.question("enter the size of array");
var arr1 = [];
for(var i =0 ;i<size;i++)
{
 arr1[i]=read.question("enter the element ")


}
if (typeof arr1 == "string")
{
Utility.bubbleSortString(arr1);
}
else {
console.log("invalid it accept only string");
}