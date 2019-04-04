/***************************************** Stock Report *******************************************
   /******************************************************************************
 *  Execution       :   1. default node          : cmd> node stockReport.js
 *                      
 *
 *  purpose         : Program to read in Stock Names, Number of Share, Share Price. 
 *                    Print a Stock Report with total value of each Stock and the total value of Stock.
 *
 *  @description    : Calculate the value of each stock and the total value.
 *  @file           : stockReport.js
 *  @author         : VAIBHAW<vatikhile>
 *  @version        : 1.0
 *  @since          : 27-03-2019
 *
 ******************************************************************************/
var utility = require("../utility")
var file = require("fs")
var flag=true;
try{
var filedata=file.readFileSync("stockReport.json")
var object =JSON.parse(filedata);
}
catch(err)
{
    console.log("File not Found"+err);

    flag=false;
}
function stock()
{
    if(flag)
utility.stockReport(object);

}
stock();
