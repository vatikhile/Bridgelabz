var read = require('readline-sync');
module.exports={
   input()
   {
      var readline =require('readline');
      var r1 =readline.createInterface({
         input: process.stdin,
         output:process.stdout
      });
      return r1;
    },

   replace(str1,str2,str3)
 {

   var str1,str2,str3;
    //COMPUTATION
    if(str3.length >= 3){
      var str4 = str1.replace(str2, str3);
      //OUTPUT
 console.log("New String: " +str4);
    }
    else 
    { 
       console.log("usermane has been minmum 3 charcter")
    }
},
}