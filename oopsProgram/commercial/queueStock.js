/******************************************************************************
 *  Execution       :   1. default node          : cmd> node queueStock.js
 *                      
 *
 *  purpose         : To maintain DateTime of the transaction in a Queue implemented using Linked
                      List to indicate when the transactions were done
 *
 *  @description    : To maintain date and time of the transaction
 *
 *  @file           : queueStock.js
 *  @author         : VAIBHAW <vatikhile>
 *  @version        : 1.0
 *  @since          : 28-03-2019
 *
 ******************************************************************************/


var fs = require('fs');
var read = require('readline-sync');
var queueAccess = require('./queueLinkedList');

class Queue {
    constructor() {
        var company = fs.readFileSync('companyShare.json', 'utf8');
        this.comp = JSON.parse(company);
        var customer = fs.readFileSync('customerShare.json');
        this.cust = JSON.parse(customer);
        this.queue = new queueAccess.QueueLinkedList;
    }
}
class StockQueue extends Queue {

    addQueue() {

        do {
            console.log("1. Buy shares\n2. Sell shares\n3. Print Company's Info\n4. Print customer record\n5. Save to file\n\n");
            var ch = read.question("Enter your choice:");
            switch (ch) {
                case "1":
                    this.buyQueue();
                    break;
                case "2":
                    this.sellQueue();
                    break;
                case "3":
                    this.printCompanyQ();
                    break;
                case "4":
                    this.printCustomerQ();
                    break;
                case "5":
                    this.writeToFileQueue();
                    break;
                default:
                    console.log("Enter valid choice");

            }
        } while (ch < 6);
       
        
    }
    buyQueue() {
        var dd = new Date();
        var userName = read.question("Enter customer name:");
        var NameOfCompany = read.question("Enter name of the company:");
        var found = false;
        for (let key in this.comp.company) {
            if (this.comp.company[key].NameOfCompany == NameOfCompany) {
                found = true;
            }
        }
        if (found == true) {
            this.queue.enqueue(NameOfCompany + "'s share bought on " + dd.getDate() + "/" +  (dd.getMonth() + 1) + "/" + dd.getFullYear() + " at " + dd.getHours() + ":" + dd.getMinutes());
            this.buyShareQ(userName);
            
        }
        else {
            console.log("Company not found");
        }

    }

    sellQueue() {
        var d = new Date();
        var userName = read.question("Enter customer name:");
        var NameOfCompany = read.question("Enter name of the company:");
        var found = false;
        for (let key in this.comp.company) {
            if (this.comp.company[key].NameOfCompany == NameOfCompany) {
                found = true;
            }
        }
        if (found == true) {
            this.sellShareQ(userName);
            this.queue.enqueue(NameOfCompany + "'s share sold on " + d.getDate() + "/" +  (d.getMonth() + 1) + "/" + d.getFullYear() + " at " + d.getHours() + ":" + d.getMinutes());
        }
        else {
            console.log("Company not found");
        }
    }

    buyShareQ(userName) {
        let name = read.question("Enter the name of the company to buy share:");
        var i, check = false;
        for (let key in this.comp.company) {
            if (this.comp.company[key].NameOfCompany == name) {
                i = key;
                check = true;
                break;
            }
        }
        if (check) {
            let num = read.questionInt("Enter number of shares you want to buy:");
            for (let key in this.cust.customer) {
                if (this.cust.customer[key].userName == userName) {
                    if (num <= this.comp.company[i].NoOfShare) {
                        this.cust.customer[key].share += num;
                        this.cust.customer[key].amount -= num * this.comp.company[i].Price;
                        this.comp.company[i].NoOfShare -= num;
                        
                    }
                }
            }
        }
        else {
            console.log("company not found")
        }
    }

    sellShareQ(userName) {
        let name = read.question("Enter the name of the company to sell share:");
        var i, check = false;
        for (let key in this.comp.company) {
            if (this.comp.company[key].NameOfCompany == name) {
                i = key;
                console.log("Customers Shares: ",this.cust.customer[i].share)
                check = true;
                break;
            }
        }
        if (check) {
            let num = read.questionInt("Enter number of shares you want to sell:");
            for (let key in this.cust.customer) {
                if (this.cust.customer[key].userName == userName) {
                    if (num <= this.cust.customer[key].share) {
                        this.cust.customer[key].share -= num;
                        this.comp.company[i].NoOfShare += num;
                        this.cust.customer[key].amount += num * this.comp.company[i].Price;
                        
                    }
                }
            }
        }
        else {
            console.log("company not found")
        }
    }

    printCompanyQ() {
        for (let key in this.comp.company) {
            console.log(this.comp.company[key]);
            console.log(" ");
        }
    }

    printCustomerQ() {
        var userName = read.question("Enter customer name:");
        for (let key in this.cust.customer) {
            if (this.cust.customer[key].userName == userName) {
                console.log(this.cust.customer[key]);
                console.log(" ");
                                
            }
        }
    }

   

    writeToFileQueue() {
        fs.writeFileSync('companyShare.json', JSON.stringify(this.comp));
        fs.writeFileSync('customerShare.json', JSON.stringify(this.cust));
    }

}
var que = new StockQueue();
que.addQueue();