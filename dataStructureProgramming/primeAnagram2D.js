/**
 * purpose     :  Insert Prime number that are anagram in array according to range. 
 *               
 * @description
 * @file       :  primeAnagram2D.js
 * @author     :  Prasanna More
 * @version    :  1.0
 * @since      :  21-2-2019
 * 
 */
try {
    let utilityalgo = require("../Algorithmic/utililty");

    let primenumbers = utilityalgo.primenumbers(1000);
    //console.log(primenumbers);
    let array = [[]];
    let range = 100;
    let k = 0;
    let row = 0;
    //for comparing two prime are anagram or not.
    for (let i = 0; i < primenumbers.length - 1; i++) {
        for (let j = i + 1; j < primenumbers.length; j++) {
            //check two primes angram or not
            if (utilityalgo.anagram(primenumbers[i], primenumbers[j])) {

                if (primenumbers[i] <= range) {
                    //store the two anagram in array
                    if (primenumbers[j] <= range) {
                        array[k].push(primenumbers[i]);
                        array[k].push(primenumbers[j]);
                    }
                } else {
                    range = range + 100;
                    k++;
                    array[k] = [];
                    if (primenumbers[j] <= range) {
                        array[k].push(primenumbers[i]);
                        array[k].push(primenumbers[j]);
                    }
                }
            }

        }
    }
    for (i = 0; i < 10; i++)
        console.log(array[i]);
}
catch (err) {
    console.log(err);
}
