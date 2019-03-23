var read = require('readline-sync');
var a=require('./DSutility/stackUtility')
var dU=require('./DSutility/dequeUtility')
var access=require('./DSutility/linkedListUtility')
module.exports={
 /*
    * PURPOSE creating the method to read text file
    * @param read text file .
    */
    readFile() {
      var read = require('fs');
      var text = read.readFileSync("./mytxt.txt",'utf-8');
      var textB= text.split(" ")
      return textB;
     },
/*
    * PURPOSE creating the method to write in text file
    * @param write in text file .
    */
    writeFile(filepath, output) {
      const fs=require('fs')
      fs.writeFile(filepath,output,function (err){
    if(err)
        {
    return console.log(err)
        }
      })
   
   },
   /*****************************************orderedlist****************************************************** */
   bubbleSort(us) {
//condition for sorting
    for(var i = 0; i < us.length; i++) {
        for(var j = 0; j < us.length; j++) {
            if(us[i] < us[j]) {
                var temp = us[i];
                us[i] = us[j];
                us[j] = temp;
            }
        }  
    }
},
/*
    * PURPOSE creating the method to read text file
    * @param read text file .
    */
readFileOrder() {
  var read = require('fs');
  var text = read.readFileSync("./order.txt",'utf-8');
  var arr1 = text.trim().split(" ");
  return arr1
 }, /*****************************************orderedlist****************************************************** */
 bubbleSort(us) {
    //condition for sorting
        for(var i = 0; i < us.length; i++) {
            for(var j = 0; j < us.length; j++) {
                if(us[i] < us[j]) {
                    var temp = us[i];
                    us[i] = us[j];
                    us[j] = temp;
                }
            }  
        }
    },
    /*
        * PURPOSE creating the method to read text file
        * @param read text file .
        */
    readFileOrder() {
      var read = require('fs');
      var text = read.readFileSync("./order.txt",'utf-8');
      var arr1 = text.trim().split(" ");
      return arr1
     },
    /**********************************************stack******************************************************** */
    
    isMatchingPair( character1, character2) 
        { 
          //match the character if it match return true if not check another condition
           if (character1 == '(' && character2 == ')')   
             return true;  
            //match the character if it match return true if not check another condition
           else if (character1 == '{' && character2 == '}')
             return true; 
            //match the character if it match return true if not check another condition
           else if (character1 == '[' && character2 == ']') 
             return true; 
             //nothing is match then return false
           else
             return false;     
        } ,
        /* Return true if expression has balanced  
           Parenthesis */
        parenthesisBalanced( exp) 
        { 
        //creating object of stack constructor
           var stack=new a.Stack();
           /* Declare an empty character stack */
           // var stack =new a.stack(); 
           
           /* Traverse the given expression to  
              check matching parenthesis */
    for(var i=0;i<exp.length;i++) 
           {  
           /*If the exp[i] is a starting  
          parenthesis then push it*/
    if (exp[i] == '{' || exp[i] == '(' || exp[i] == '[') 
           stack.push(exp[i]); 
           /* If exp[i] is an ending parenthesis  
        then pop from stack and check if the  
        popped parenthesis is a matching pair*/
    if (exp[i] == '}' || exp[i] == ')' || exp[i] == ']') 
              {
            /* If we see an ending parenthesis without  
            a pair then return false*/
    if (stack.isEmpty()) 
                { 
    return false; 
    }  
           /* Pop the top element from stack, if  
           it is not a pair parenthesis of character  
          then there is a mismatch. This happens for  
          expressions like {(}) */
    else if ( !this.isMatchingPair(stack.pop(), exp[i]) ) 
                   { 
          return false; 
                   } 
              }    
           }    
           /* If there is something left in expression  
              then there is a starting parenthesis without  
              a closing parenthesis */
           if (stack.isEmpty()) 
             return true; /*balanced*/
           else
             {   /*not balanced*/
                 return false;    
             }  
        } ,
    }