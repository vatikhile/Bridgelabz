/******************************************************************************
 *  Execution       : default node         :cmd> node regularExpression.js 
 *  Purpose         : To replace Name,Username,Mobile number with given input from user.
 *
 *  @description    :To Hello <<name>>,We have your fullname as <<fullname>> in our system.
 *                   your contact number is <<91xxxxxxxxx>>.please,let us know in case of any clarification,
 *                   Thank You BridgeLabz <<xx-xx-xxxx>>.Use regex to replace name, fullname,mobile no,and date with proper value.
 *  @file           :regularExpression.js
 *  @overview       : To replace name ,fullname, mobile number using regex and to update current date. 
 *  @author         : VAIBHAW <vatikhile>
 *  @version        : 1.0
 *  @since          : 26/03/2019
 *
 ******************************************************************************/
var utility = require("../utility");
var read = require("readline-sync");
function regEx() {
    try {
        //taking input from user
        var name = read.question("please enter your name: ");
        //check the condition
        if (!/^[a-zA-Z]+$/.test(name))
            throw "enter a string value";

        var fullname = read.question("please enter your fullname: ");
        if (!/^[a-zA-Z]+$/.test(fullname))
            throw "enter a string value";
        // utility.getFullName();
        var mobilenumber = read.question("enter valid mobile number: ");
        //check the condition for mobile number
        if ((!/^\d{10}$/.test(mobilenumber)))
            throw "enter ten digit number";

        var ds = new Date();
        dt = ds.getDate() + "/" + (ds.getMonth()) + "/" + ds.getFullYear();


        utility.regex(name, fullname, mobilenumber, dt);
    }
    catch (err) {
        console.log('ERROR : ', err);
        regEx();
    }
}
regEx();
