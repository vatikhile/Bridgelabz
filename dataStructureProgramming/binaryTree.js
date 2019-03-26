/**
 * purpose     :  Find number of binary can be formed with n number of node. 
 *               
 * @description
 * @file       :  Binarytree.js
 * @author     :  VAIBHAW
 * @version    :  1.0
 * @since      :  21-2-2019
 * 
 */
try {
    let utility = require("./utility");
    let readline = require("readline-sync");
    // read numbers of nodes
    let nodes = parseInt(readline.question("Enter of nodes:"));
    if (isNaN(nodes) || nodes < 1) {
        throw "Enter valid number of nodes"
    }
    // calculate number of trees.
    utility.binaryTree(nodes);
    
}
catch (err) {
    console.log(err)
}
