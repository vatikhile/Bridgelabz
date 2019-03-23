
/******************************************************************************
 *  Execution       :   1. default node         cmd> node BinarySearchInt.js 
 *  Purpose         : Search  a string `input string ` is available  or not.
 *
 *  @file                 : BinarySearchInt.js
 *  @overview       : BinarySearch method for integer
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 14/03/2019
 *
 ******************************************************************************/
var Utility=require('./Utility');
var read=require('readline-sync');
var num=read.questionInt("enter the size of array : ")
var arr=[];
// taking the input upto array length
while(num!=arr.length)
{
    var number=read.questionInt("enter the array elements : ")
    //store the element in array which are taking from the user
    arr.push(number)
}
//calling the methods
var arr1=Utility.bubbleSortIntger(arr)
var num=read.questionInt("enter the number to be search: ")
var time=Utility.stopwatchmill()
var b=Utility.binarySearchInt(arr1,num)
var time1=Utility.stopwatch();
var totaltime=time1-time;
console.log(totaltime+" millesecond taken to exicute ")
 if(b==true)
 console.log("number is present")
 else
console.log("not present")