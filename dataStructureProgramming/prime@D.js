
/**
 * purpose     :  Insert Prime number in array according to range. 
 *               
 * @description
 * @file       :  prime2D.js
 * @author     :  VAIBHAW
 * @version    :  1.0
 * @since      :  21-2-2019
 * 
 */
try {
    let u = require("../Algorithmic/utililty");
    let ud = require("./utility");

    let primenumbers = u.primenumbers(1000);
    //console.log(primenumbers);
    primearray = [[]];
    let range = 100;
    let j = 0;
    let row = 0;
    for (let i = 0; i < primenumbers.length; i++) {
        // insert if primenumber is less than range
        if (primenumbers[i] < range) {
            primearray[row][j] = primenumbers[i];
            j++;
        }
        // increment range and insert if primenumber is greater than range
        else {
            range += 100;
            row = row + 1;
            j = 0;
            primearray[row] = [];
            primearray[row][j] = primenumbers[i];
        }
    }
    for (i = 0; i < 10; i++)
        console.log(primearray[i]);
}
catch (err) {
    console.log(err)
}