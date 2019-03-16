var Utility =require('./Utility');
var read = require('readline-sync');

var Y=process.argv[2]
var R=process.argv[3]
var P=process.argv[4]
Utility.monthlyPayment(Y,R,P)