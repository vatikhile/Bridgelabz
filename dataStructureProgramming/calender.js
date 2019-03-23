/**
 * purpose     :  Print calender of specified month and year. 
 *               
 * @description
 * @file       :  Calender.js
 * @author     :  Prasanna More
 * @version    :  1.0
 * @since      :  21-2-2019
 * 
 */
try {
    let utilitydata = require("./utility");
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

    utilitydata.calender(month, year);

}
catch (err) {
    console.log(err)
}
