/******************************************************************************
 *  Execution       :   1. default node         cmd> node MonthlyPayment.js 
 *  Purpose         : prints the payment using formula of payment
 *
 *  @file                 :MonthlyPayment.js 
 *  @overview       : Calculate monthly payment
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 16/03/2019
 *
 ******************************************************************************/
var Utility =require('./Utility');
var read = require('readline-sync');

var Y=process.argv[2]
var R=process.argv[3]
var P=process.argv[4]
Utility.monthlyPayment(Y,R,P)