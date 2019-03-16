var Utility =require('./Utility');

var read = require('readline-sync');
var string1= read .question("enter The First String:");
var string2= read .question("enter The secound String:");

Utility.checkAnagram(string1,string2) ;