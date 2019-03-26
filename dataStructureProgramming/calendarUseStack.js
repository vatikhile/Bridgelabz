/**
 * purpose     :  print calender using stack. 
 *               
 * @description
 * @file       :  calenderUsingStack.js
 * @author     :  VAIBHAW
 * @version    :  1.0
 * @since      :  21-2-2019
 * 
 */
try {
    
    let utility = require("./utility");
    
    
    // take month
    let month = parseInt(process.argv[2]);
    if (isNaN(month)) {
        throw "Enter valid month"
    }
    // take year
    let year = parseInt(process.argv[3]);
    if (isNaN(year)) {
        throw "Enter valid year"
    }

    utility.calendarUsingStack(month,year);

}
catch (err) {
    console.log(err)
}