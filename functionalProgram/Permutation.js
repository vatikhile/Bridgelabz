/******************************************************************************
*  Execution         :   1. default node         cmd> node Permutation.js 
*  Purpose            : permutation of a String using iterative method and Recursion method. Check if the arrays returned by two string functions are equal
*  @file                 : Permutation.js
*  @overview       : print permutation string
*  @author          : VAIBHAW
*  @version         : 1.0
*  @since             : 13/03/2019
*
******************************************************************************/
var Utility =require('./Utility');
 function permutation1()
{
    var read=Utility.input();
    read.question('Enter a string :',(string)=>
    { 
       var str = string.toString();
       //console.log('string is :',str);
       var arr = [];
       for(let i = 0;i<str.length;i++)
       {
           arr.push(str.charAt(i.toString()));
       }
       
           Utility.Permutation(arr,0);
           read.close();
    });
	}

permutation1();