/******************************************************************************
 *  Execution       :   1. default node          : cmd> node clinic.js
 *                      
 *
 *  purpose         : This programme is used to manage a list of Doctors associated with the Clinic.
 *
 *  @description    : This also manages the list of patients who use the
                      clinique. It manages Doctors by Name, Id, Specialization and Availability (AM, PM or
                      both). It manages Patients by Name, ID, Mobile Number and Age. The Program allows
                      users to search Doctor by name, id, Specialization or Availability.
 *
 *  @file           : clinic.js
 *  @author         :VAIBHAW <vatikhile>
 *  @version        : 1.0
 *  @since          : 29-03-2019
 *
 ******************************************************************************/

var util = require('../utility');
var fs = require('fs');
var read=require('readline-sync');
function clinic()
{
     try{
        var read = fs.readFileSync("clinique.json","utf8");
        var data = JSON.parse(read);
        util.read.clinicManagement(data);
    }
    catch(err)
    {
        console.log("ERROR : "+err);
    }

}
clinic()