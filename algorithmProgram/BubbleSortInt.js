
  
 /******************************************************************************
 *  Execution       :   1. default node         cmd> node BubbleSortInt.js 
 *  Purpose         : prints the sorted order  
 *
 *  @file                 : BubbleSortInt.js
 *  @overview       : BubbleSort method for integer
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
 arr1[i]=read.questionInt("enter the element ")


}

Utility.bubbleSortIntger(arr1);