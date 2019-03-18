
     /*****************************************************************************
 *Execution         :   1. default node         cmd> node Replace.js 
 * Purpose: User Input and Replace String Template “Hello <<UserName>>, How are you?” 
 * @file                 : Replace.js
 *  @overview       : Replace the string  with <<username>>
 * @author          :VAIBHAW
 *  @version        :1.0
 *  @since   11-03-2019
 *****************************************************************************/ var Utility = require('./Utility');
var read = require('readline-sync');


//declare data
str1 = "Hello username how are you?"
//taking input from the user
var str2 = read.question("Enter string u want to repalce: ")
var str3 = read.question("Enter string you  want to replace with: ")

Utility.replace(str1, str2, str3);






