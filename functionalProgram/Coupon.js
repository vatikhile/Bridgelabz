/******************************************************************************
 *  Execution         :   1. default node         cmd> node Coupon.js 
 *  Purpose            : Given N distinct Coupon Numbers, how many random numbers do you need to generate distinct coupon number?
 *
 *  @file                 : Coupon.js
 *  @overview       : Gnerate random Coupon Numbers
 *  @author          : VAIBHAW
 *  @version         : 1.0
 *  @since             : 12/03/2019
 *
 ******************************************************************************/
var Utility = require('./Utility');
var Utility = require('./Utility');
var read = require('readline-sync');
//taking the input from the user
var num = read.questionInt('enter the distinct number');
//calling the method       
Utility.coupon(num);
