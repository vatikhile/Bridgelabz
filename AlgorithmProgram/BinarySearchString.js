
  
/******************************************************************************
 *  Execution       :   1. default node         cmd> node BinarySearchString.js 
 *  Purpose         : Search  a integer `input number ` is available  or not.
 *
 *  @file                 : BinarySearchString.js
 *  @overview       : BinarySearch method for integer
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 15/03/2019
 *
 ******************************************************************************/
var Utility =require('./Utility');
/**
 * import the Utility class to use the functionalities.
 */

var read=require('readline-sync');
var num=read.question("enter the size of string content: ")
var arr=[];
while(num!=arr.length)
{
    var number=read.question("enter the string  : ")
    arr.push(number)
}

var arr1=Utility.bubbleSortString(arr)
var string=read.question("enter the String to be search: ")

var b =Utility.binarySearchString(arr1,string);
if(b==true)
console.log("String is present")
else
console.log("not present")