/******************************************************************************
*  Execution        :   1. default node         cmd> node Gambler.js 
*  Purpose           : Simulates a gambler who start with $stake and place fair $1 bets until he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of times he/she wins and the number of bets he/she makes.
*  @file                 : Gambler.js
*  @overview       : Print Number of Wins and Percentage of Win and Loss.
*  @author          : VAIBHAW
*  @version         : 1.0
*  @since             : 12/03/2019
*
******************************************************************************/
var Utility = require('./Utility')
var read = require('readline-sync')
//taking the input from the user
var cash = read.question("Enter cash amount: ");
var Goal = read.question("Enter Goal amount:");
var Times = read.question("Enter Number of Times:");
//check the condition goal is greater or not
if (Goal > cash) {
     //calling the method 
     Utility.gambler(cash, Goal, Times)
}
else {
     console.log('cash should be less than goal');
}