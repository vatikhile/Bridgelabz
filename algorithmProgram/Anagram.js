/******************************************************************************
 *  Execution       :   1. default node         cmd> node Anagram.js 
 *  Purpose         : Determines whether a string `input string ` is anagram or not.
 *
 *  @file                 : Anagram.js
 *  @overview       : Anagram checker module to check if string is anagram or not.
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 14/03/2019
 *
 ******************************************************************************/
var Utility =require('./Utility');


//taking the input from the user
var string1= read .question("enter The First String:");
var string2= read .question("enter The second String:");

Utility.checkAnagram(string1,string2) ;