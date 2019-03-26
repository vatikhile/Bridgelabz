
let utility=require("./linkedList");

let readline=require("readline-sync");
let search=Number(readline.question("Enter string to search"));
var ll=new utility.linkList();
var fs = require('fs');
var data=fs.readFileSync('orderedlist.txt');
stringdata=data.toString();
trim=stringdata.trim();
var dataarray=trim.split(/\s/);
console.log(dataarray);
for(let i=0;i<dataarray.length;i++)
{
    ll.addElement((dataarray[i]));
}
console.log("element in the list\n")
ll.print();
console.log()
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
 ll.sortLinkedlist();
 console.log("After sorted")
 ll.display();
ll.addTofile('orderedlist.txt');