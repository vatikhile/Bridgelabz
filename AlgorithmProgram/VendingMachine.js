
var Utility =require('./Utility');
var read = require('readline-sync');
var amount=read.questionInt("enter amount :")
var arr=[2000,500,100,50,10,5,2,1]
Utility.vendingMachine(arr,amount)