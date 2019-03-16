var Utility =require('../FunctionalProgram/Utility');
var read =require('readline-sync');
//function flipCoin()

   //TAKING INPUT FORM USER
    // var read=Utility.input();

var flip = read.questionInt("enter no. of times to flip coin:")
      //CALLING THE METHOD 

        Utility.flipCoin(flip);
        // read.close();

 

//flipCoin();