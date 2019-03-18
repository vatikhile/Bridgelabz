/*****************************************************************************
 *Execution         :   1. default node         cmd> node LeapYear.js 
 * Purpose: Print the year is a Leap Year or not.
 * @file                 : LeapYear.js
 * @overview       : check year is leap year or not
 * @author  VAIBHAW
 *  @version 1.0
 *  @since   11-03-2019
 *****************************************************************************/
var Utility = require('./Utility');
var read = require('readline-sync');
//taking input from user
var year = read.questionInt("enter the year:");
var len = "" + year
//check the condition for length of year digit is four or not
if (len.length == 4) {
    Utility.leapYear(year);

}
else {
    console.log('It is Not four digit (year)');
}
