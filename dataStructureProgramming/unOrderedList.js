/**
 * purpose     :  Read the Text from a file, split it into words and arrange it as Linked List. Take a user input to search a Word in the List. If the Word is not found then add it to the list, and if it found then remove the word from the List. In the end save  the list into a file
 *               
 * @description
 * @file       :  unOrderedList.js
 * @author     :  VAIBHAW
 * @version    :  1.0
 * @since      :  20-2-2019
 * 
 */
try{
   //let utility=require("./utility");
   let linkedlist =require("./linkedlist");
   let readline=require("readline-sync");
   let search=readline.question("Enter string to search");
   if (search.length<1) {
       throw "Enter valid string"
   }
   var ll=new linkedlist.linkList();
   var fs = require('fs');
   var data=fs.readFileSync('textfile.txt');
   stringdata=data.toString();
   var dataarray=stringdata.split(" ");
   console.log(dataarray);
   // add element in linked list
   for(let i=0;i<dataarray.length;i++)
   {
       ll.addElement(dataarray[i]);
   }
   console.log("element in the list\n")
   ll.print();
   console.log()
   // if element is present  remove else add
   if(ll.searchElement(search))
   {
       ll.removeElement(search);
       console.log("Element found and removed");
   }
   else{
       ll.addElement(search);
       console.log("Element not found and added")
   }
   console.log("element in the list\n")
   ll.print();
   ll.addTofile('textfile.txt');
   }
   catch(err)
   {
       console.log(err)
   }
   