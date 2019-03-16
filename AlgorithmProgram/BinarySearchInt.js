var Utility=require('./Utility');
var read=require('readline-sync');
var num=read.questionInt("enter the size of array : ")
var arr=[];
while(num!=arr.length)
{
    var number=read.questionInt("enter the array elements : ")
    arr.push(number)
}
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