var Utility =require('./Utility');

var read=Utility.input();
console.log("Hello UserName, How are you?");
str1="Hello UserName, How are you?"
read.question("Enter the string you want to replace:",function(str2)
{
read.question("Enter the string you want to replace with:",function(str3)
{
    Utility.replace(str1,str2,str3);
    read.close();
})
})
