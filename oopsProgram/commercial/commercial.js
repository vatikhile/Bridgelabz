/******************************************************************************
 *  Execution       :   1. default node          : cmd> node commercial.js
 *                      
 *
 *  purpose         : This program is used by a financial institution to keep track of customer information.
 *
 *  @description    : The StockAccount class also maintains a list of CompanyShares object which has
                      Stock Symbol and Number of Shares as well as DateTime of the transaction. When
                      buy or sell is initiated StockAccount checks if CompanyShares are available and
                      accordingly update or create an Object.
 *
 *  @file           : commercial.js
 *  @author         : VAIBHAW <vatikhile>
 *  @version        : 1.0
 *  @since          : 28-03-2019
 *
 ******************************************************************************/

var read = require('readline-sync');
var fs = require('fs');

class customer {
    constructor(userName, share, amount) {
        this.userName = userName;
        this.share = share;
        this.amount = amount;
    }
}

class Company {
    constructor(NameOfCompany, NoOfShare, Price) {

        this.NameOfCompany = NameOfCompany;
        this.NoOfShare = NoOfShare;
        this.Price = Price;
    }
}

class stockAccount extends customer {

    operate() {
        console.log("#$ Commercial data processing $#");
        console.log("1. Company");
        console.log("2. Customer");
        var ch = read.question("Enter your choice:\n");


        switch (ch) {

            case "1":
                console.log();
                console.log("=== Company *******");
                console.log("1.To add a company");
                console.log("2.To display the companies");
                var com = read.question("Enter your choice : ");
                stockObj.Company(com);

                break;
            case "2":
                console.log();
                console.log("==== Customer's portal ====");
                console.log("1. New user");
                console.log("2. Registered user");
                var custo = read.question("Enter your choice: ");
                stockObj.Customer(custo);

                break;
            default:
                console.log("Enter valid input");
        }

    }
    Company(com) {

        switch (com) {

            case "1":
                var NameOfCompany = read.question("Enter name of the company:");
                var NoOfShare = read.question("Enter number of shares:");
                var Price = read.question("Enter price of the share:");
                var symbol = read.question("Enter symbol of the company:")
                var comp = new Company(NameOfCompany, NoOfShare, Price, symbol);
                var companyData = fs.readFileSync('companyShare.json');
                let info = JSON.parse(companyData);
                info.company.push(comp);
                fs.writeFileSync('companyShare.json', JSON.stringify(info));
                console.log(info);
                console.log("Successfully data updated in the file");
                stockObj.operate();
                break;
            case "2":
                companyData = fs.readFileSync('companyShare.json');
                var info1 = JSON.parse(companyData);
                console.log("List of Companies:");
                console.log(info1);
                stockObj.operate();
                break;
        }
    }

    Customer(custo) {

        switch (custo) {

            case "1":
                var userName = read.question("Enter name of customer:");
                var share = read.question("Enter number of shares:");
                var amount = read.question("Enter price of the share:");
                var custo = new customer(userName, share, amount);
                var customerData = fs.readFileSync('customerShare.json');
                let infoCust = JSON.parse(customerData);
                infoCust.customer.push(custo);
                fs.writeFileSync('customerShare.json', JSON.stringify(infoCust));
                console.log(infoCust);
                console.log("Successfully updated data in the file");
                stockObj.operate()
                break;
            case "2":
                var found = 0;
                var userName = read.question("Enter user name for login:");
                customerData = fs.readFileSync('customerShare.json');
                var infoCust1 = JSON.parse(customerData);
                var userInfo = infoCust1.customer;
                userInfo.forEach(function (customer) {
                    if (userName == customer.userName) {
                        console.log(customer);
                        stockObj.buyOrSell(userName);
                        found++;
                    }
                });
                if (found == 0) {

                    console.log("No user found");
                    return null;
                }
                break;
            default:
                console.log("Enter valid choice");
        }

    }

    buyOrSell(userName) {

        console.log("1. Buy shares\n2. Sell shares");
        var chShare = read.question("Enter your choice:");

        if (chShare == 1) {
            stockObj.buy(userName);
        } else if (chShare == 2) {
            stockObj.sell(userName);
        }
    }

    buy(userName) {
        var foundCom = 0;
        var companyData = fs.readFileSync('companyShare.json', 'utf8');
        var cmpJson = JSON.parse(companyData);
        let cmpInfo = cmpJson.company;
        console.log("List of company:");
        console.log(cmpInfo);
        var NameOfCompany = read.question("Enter name of company to buy shares:");
        var NoOfShare = read.question("Enter number of shares you want to purchase:");


        cmpInfo.forEach(function (company) {
            if (NameOfCompany == company.NameOfCompany) {
                stockObj.buyShare(NameOfCompany, NoOfShare, userName);
                foundCom++;
            }
        });
        if (foundCom == 0) {

            console.log("Enter valid data");
        }

    }

    sell(userName) {
        var found = 0;
        var foundCom = 0;
        var companyData = fs.readFileSync('companyShare.json', 'utf8');
        console.log("List of company:");
        console.log(companyData);
        var NameOfCompany = read.question("Enter name of company to sell shares:");
        var NoOfShare = read.question("Enter number of shares you want to sell:");
        var Price = read.question("Enter price of the share:")
        var customerData = fs.readFileSync('customerShare.json');
        let infoCust3 = JSON.parse(customerData);
        var userInfo2 = infoCust3.customer;
        userInfo2.forEach(function (customer) {
            if (userName == customer.userName && customer.share <= NoOfShare) {
                found++;
            }
        });

        var cmpJson = JSON.parse(companyData);
        var cmpInfo1 = cmpJson.company;
        cmpInfo1.forEach(function (company) {
            if (NameOfCompany == company.NameOfCompany) {
                foundCom++;
            }
        });
        if (foundCom == 0 && found == 0) {

            console.log("Enter valid data");
        } else {
            stockObj.sellShare(NameOfCompany, NoOfShare, Price, userName);
        }

    }

    buyShare(NameOfCompany, NoOfShare, userName) {
        var value;
        var num = parseInt(NoOfShare);
        var companyData = fs.readFileSync('companyShare.json', 'utf8');
        var cmpJson = JSON.parse(companyData);
        let cmpInfo2 = cmpJson.company;
        cmpInfo2.forEach(function (company) {
            if (NameOfCompany == company.NameOfCompany) {
                var userShare = parseInt(customer.share);
                var totalShare = NoOfShare - userShare;
                customer.share = totalShare;
                value = parseInt(company.Price);
            }
        });

        fs.writeFileSync('companyShare.json', JSON.stringify(cmpJson));
        var newData = fs.readFileSync('companyShare.json', 'utf8')
        let dataJson = JSON.parse(newData);
        console.log(dataJson);
        console.log('Successfully Updated');
        console.log();

        var customerData = fs.readFileSync('customerShare.json', 'utf8');
        let infoCust = JSON.parse(customerData);
        let userInfo3 = infoCust.customer;
        userInfo3.forEach(function (customer) {
            if (userName == customer.userName) {
                var userShare = parseInt(customer.share);
                var shareP = value;
                var add = userShare + num; 
                customer.share = add;
                var total = shareP * num; 
                var userAmount = (Number(customer.amount));
                var uAmount = userAmount - total;
                customer.amount = uAmount;

            }
        });

        fs.writeFileSync('customerShare.json', JSON.stringify(infoCust));
        var newData = fs.readFileSync('customerShare.json', 'utf8')
        let detail = JSON.parse(newData);
        console.log(detail);
        console.log('Successfully updated');
        console.log();


    }

    sellShare(NameOfCompany, NoOfShare, Price, userName) {

        var price = parseInt(Price); 
        var num = parseInt(NoOfShare); 
        var add = num * price; 
       
        var companyData = fs.readFileSync('companyShare.json', 'utf8');
        var cmpJson2 = JSON.parse(companyData);
        var infoCom = cmpJson2.company;
        infoCom.forEach(function (company) {
            if (NameOfCompany == company.NameOfCompany) {
                
                var ns = parseInt(company.NoOfShare);
                var add = ns + num; 
                company.NoOfShare = add;

                fs.writeFileSync('companyShare.json', JSON.stringify(cmpJson2));
                var newData = fs.readFileSync('companyShare.json', 'utf8')
                let detail = JSON.parse(newData);
                
                console.log(detail);
                console.log('Successfully updated');
                console.log();
            }
        });
        
        var customerData = fs.readFileSync('customerShare.json', 'utf8');
        var custJson = JSON.parse(customerData);
        var userInfo4 = custJson.customer; 
        userInfo4.forEach(function (customer) {
            
            if (userName == customer.userName) {
                
                let minus = customer.share - NoOfShare;
             
                customer.share = minus;
                var userAmount = parseInt(customer.amount);
                
                var amount = add + userAmount;
                
                customer.amount = amount;

            }
        });
       
        fs.writeFileSync('customerShare.json', JSON.stringify(custJson));
       
         
        var newData = fs.readFileSync('customerShare.json', 'utf8');
       
        let detail = JSON.parse(newData);
        
        console.log(detail);
        console.log();
        stockObj.operate();
    }
}

var stockObj = new stockAccount();
stockObj.operate();
module.exports = {
    stockAccount
}