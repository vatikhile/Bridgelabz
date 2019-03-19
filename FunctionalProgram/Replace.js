
     /*****************************************************************************
 *Execution         :   1. default node         cmd> node Replace.js 
 * Purpose: User Input and Replace String Template “Hello <<UserName>>, How are you?” 
 * @file                 : Replace.js
 *  @overview       : Replace the string  with <<username>>
 * @author          :VAIBHAW
 *  @version        :1.0
 *  @since   11-03-2019
 *****************************************************************************/ var Utility = require('./Utility');
var read = require('readline-sync');

var format = /[a-zA-Z]/;
var name = read.question('Enter the name :')
if (format.test(name)) {
    if (name.length <= 3) {
        Utility.replace(name);
    }
    else {
        console.log('username has min 3 char ');
    }
}
else {
    console.log('Enter the string');

}
