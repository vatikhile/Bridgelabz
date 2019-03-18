
/******************************************************************************
 *  Execution       :   1. default node         cmd> node MergeSort.js 
 *  Purpose          : prints the  sorted list using merge sort
 * 
 *  @file                 : MergeSort.js
 *  @overview       : program  to do Merge Sort of list of Strings. 
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 15/03/2019
 *
 ******************************************************************************/
var Utility =require('./Utility');
var read = require('readline-sync');

var num=read.questionInt("enter the size of array : ")
var arr=[];
while(num!=arr.length)
{
    var number=read.questionInt("enter the array elements : ")
    arr.push(number)
}
var l=0;
var h=arr.length;
function Merge(){
    

    Utility.mergeSort(arr);
    console.log("Merge sorted result ",arr);
    }
    Merge();