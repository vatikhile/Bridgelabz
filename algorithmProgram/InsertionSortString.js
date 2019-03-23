/******************************************************************************
 *  Execution       :   1. default node         cmd> node InsertionSortString.js 
 *  Purpose         : Reads in strings from standard input and prints them in sorted order.
 *
 *  @file                 : InsertionSortString.js
 *  @overview       : Insertion Sort to sort the words in the String array
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 15/03/2019
 *
 ******************************************************************************/
var Utility =require("./Utility");
var read = require('readline-sync');
//var inputArray= ["Banana", "Orange", "Apple", "Mango"];
var size =read.question("enter the size of array");
var arr = [];
for(var i =0 ;i<size;i++)
{
 arr[i]=read.question("enter the string: ")


}
Utility.insertionSortString(arr);