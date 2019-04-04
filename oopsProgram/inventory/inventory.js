/******************************************************************************
 *  Execution       :   1. default node          : cmd> node inventory.js
 *                      
 *
 *  purpose         : To create inventory object from JSON and to calculate the value for every inventory.
 *
 *  @description    : To create a JSON file having Inventory Details for Rice, Pulses and
 *                    Wheat with properties name, weight, price per kg.
 *
 *  @file           : inventory.js
 *  @overview       : To calculate the total cost of each object in inventory for given quantity.
 *  @author         : VAIBHAW<vatikhile>
 *  @version        : 1.0
 *  @since          : 26-03-2019
 *
 ******************************************************************************/
// var utility = require("../utility");
// var fs = require("fs");

// //read the JSON file
// var data = fs.readFileSync("inventoryData.json");
// //convert it into object
// var object =JSON.parse(data);
// utility.inventory(object);
  
// function inventoryData()
// {

//     //calling the inventory function
//     utility.inventory(object);

// }

// inventoryData();

var utility = require("../utility");
var fs = require("fs");
var flag = true;

try {
    //read the JSON file
    var data = fs.readFileSync("inventoryData.json");
//convert it into object
    var object = JSON.parse(data);
}
catch (err) {
    console.log("file not found ");
    flag = false;
}

function inventoryData() {
   //calling the inventory function
    if (flag) 
    utility.inventory(object);
}
inventoryData();
