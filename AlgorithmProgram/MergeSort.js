
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