var Utility =require('./Utility');
var read =require('readline-sync');

//function replace(){

    // var read=Utility.input();
     //DECLARE DATA
        str1="Hello username how are you?"
   //TAKING INPUT FORM USER
       var str2= read.question("Enter string u want to repalce: ")
        var str3=read.question("Enter string you  want to replace with: ")
            
                   Utility.replace(str1,str2,str3);
                   //read.close();
        
        

    
   // }

 //replace();
