/******************************************************************************
 *  Execution       : default node         :cmd> node inventoryManage.js 
 *  Purpose         : To create inventory object from JSON and to calculate the value for every inventory.
 *
 *  @description    :To create a JSON file having the Inventory Details for Rice, Pulse and Wheats with 
 *                   properties name weight,weight and price per kg.
 *  @file           :inventoryManage.js
 *  @overview       : To calculate the total cost of each object in inventory for given quantity.
 *  @author         : VAIBHAW <vatikhile>
 *  @version        : 1.0
 *  @since          : 27/03/2019
 *
 ******************************************************************************/
var utility = require('../utility')
var file =require('fs');
function inventoryManage()

{
// try{

    var str = file.readFileSync('inventoryManage.json');
   var data = JSON.parse(str);
   utility.inventoryManagement(data);


// catch(err)
// {
// console.log('error found');
// }

}
inventoryManage();
