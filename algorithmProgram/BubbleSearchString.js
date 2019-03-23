/******************************************************************************
 *  Execution       :   1. default node         cmd> node BubbleSearchString.js 
 *  Purpose         : prints the sorted order string
 *
 *  @file                 : BubbleSearchString.js
 *  @overview       : Bubble Sort method for string
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 15/03/2019
 *
 ******************************************************************************/
var Utility = require('./Utility');
/**
 * import the Utility class to use the functionalities.
 */

var read = require('readline-sync');
var num = read.questionInt("enter the size of string content: ")
var arr = [];

while (num != arr.length) {
    var number = read.question("enter the string  : ")
    arr.push(number)
 
}


var arr1 = Utility.bubbleSortString(arr)
var string = read.question("enter the String to be search: ")
if (typeof number == "string" && typeof string == "string") {
    var b = Utility.binarySearchString(arr1, string);

if (b == true)
    console.log("String is present")

else
    console.log("not present")

}
   else {
    console.log("invalid it accept only string");
}