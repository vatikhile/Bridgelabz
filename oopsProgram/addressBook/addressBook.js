/******************************************************************************
 *  Execution       :   1. default node          : cmd> node addressBook.js
 *                      
 *
 *  purpose         : A program that can be used to maintain an address book. 
 *
 *  @description    : An address book holds a collection of entries, each recording a person's first and last names, address, city, state, zip, and
                      phone number.
 *
 *  @file           : addressBook.js
 *  @author         : VAIBHAW<vatikhile>
 *  @version        : 1.0
 *  @since          : 28-03-2019
 *
 ******************************************************************************/



var util = require('../utility');
var fs = require('fs');
var read = require('readline-sync');
try {
    
    var file = fs.readFileSync("address.json", "utf8");
    var object = JSON.parse(file);
    util.personAddressBook(object,read);
}
catch (err) {
    console.log("ERROR : " + err);
}

