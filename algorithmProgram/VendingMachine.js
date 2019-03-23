
/******************************************************************************
 *  Execution       :   1. default node         cmd> node VendingMachine.js 
 *  Purpose         :  The number of minimum Note needed to give the change and  list of Rs Notes that would given in the Change
 *
 *  @file                 : VendingMachine.js
 *  @overview       : prints the day of the week that date falls on
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 16/03/2019
 *
 ******************************************************************************/
var Utility =require('./Utility');
var read = require('readline-sync');
var amount=read.questionInt("enter amount :")
var arr=[2000,500,100,50,10,5,2,1]
Utility.vendingMachine(arr,amount)