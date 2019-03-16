var Utility= require('./Utility')
var read= require('readline-sync')


var cash=read.question("Enter cash amount: ");
    var Goal=read.question("Enter Goal amount:");
     var Times=read.question("Enter Number of Times:");
     if(Goal>cash)   
     {
     Utility.gambler(cash,Goal,Times)
     }
     else{
     console.log('cash should be less than goal');
     }