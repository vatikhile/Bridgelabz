/******************************************************************************
 *  Execution       :   1. default node          : cmd> node stackCommercial.js
 *                      
 *
 *  purpose         : To maintain the Stock Symbol Purchased or Sold in a Stack implemented using
                      Linked List to indicate transactions done.
 *
 *  @description    : To maintain the stock symbol purchased or sold 
 *
 *  @file           : stackCommercial.js
 *  @author         : VAIBHAW <vatikhile>
 *  @version        : 1.0
 *  @since          : 29-03-2019
 *
 ******************************************************************************/

var fs = require('fs');
var stk = require("./stackLinkedList");
var read = require('readline-sync');

class Stock {
    constructor() {
        var company = fs.readFileSync("companyShare.json", "utf8")
        this.comp = JSON.parse(company);
        var customer = fs.readFileSync("customerShare.json", "utf8");
        this.cust = JSON.parse(customer);
        this.stack = new stk.StackLinkedList;
    }
}

class Stack extends Stock {
    addStock() {
        var ch = read.questionInt("Choose from the given options \n" +
            " 1.Buy Shares \n 2.Sell Shares \n 3.Print Company's Info\n 4.Print customer record\n 5.save to file \n");

        switch (ch) {
            case 1: this.buyStock();
                break;
            case 2: this.sellStock();
                break;
            case 3: this.printCompany();
                break;
            case 4: this.printCustomer();
                break;
            case 5: this.saveToFile();
                break;
            default: console.log("enter a valid option ");
        }
    }

    buyStock() {
        var uName = read.question("enter the customer name ");
        var cName = read.question("Enter the Company Name ");
        var found = false;
        for (let key in this.comp.company) {
            if (this.comp.company[key].NameOfCompany == cName)
                found = true;
        }
        if (found == true) {
            this.buyShare(uName);
            this.stack.push(cName + "'s shares bought");

        }
        else {
            console.log("company not found ");
        }
    }

    sellStock() {
        var uName = read.question("enter the customer name ");
        var cName = read.question("Enter the Company Name ");
        var found = false;
        for (let key in this.comp.company) {
            if (this.comp.company[key].NameOfCompany == cName)
                found = true;
        }
        if (found == true) {
            this.sellShare(uName);
            this.stack.push(cName + "s shares sold");
            
        }
        else {
            console.log("company not found ");
        }
    }

    buyShare(uName) {
        var val;
        var flag = false;
        var name = read.question("enter the name of the company you want to buy shares from ");
        for (let key in this.comp.company) {
            if (this.comp.company[key].NameOfCompany == name) {
                val = key;
                flag = true;
            }
        }
        if (flag) {
            var num = read.questionInt("enter the number of shares you want to buy ");
            for (let key in this.cust.customer) {
                if (this.cust.customer[key].userName == uName) {
                    if (num <= this.comp.company[val].NoOfShare) {
                        this.cust.customer[key].share += num;
                        this.cust.customer[key].amount -= num * this.comp.company[val].Price;
                        this.comp.company[val].NoOfShare -= num;
                       
                 
                   }
                   console.log("success..enter 5 to save file")
                   console.log(" ");
                }

            }
        }
        else {
            console.log("company not found");
        }
        this.addStock()

    }

    sellShare(uName) {
        var val;
        var flag = false;
        var name = read.question("enter the name of the company you want to sell shares to ");
        for (let key in this.comp.company) {
            if (this.comp.company[key].NameOfCompany == name) {
                val = key;
                flag = true;
            }
        }
        if (flag) {
            var num = read.questionInt("enter the number of shares you want to sell ");
            for (let key in this.cust.customer) {
                if (this.cust.customer[key].userName == uName) {
                    if (num <= this.cust.customer[val].share) {
                        this.cust.customer[key].share -= num;
                        this.cust.customer[key].amount += num * this.comp.company[val].Price;
                       
                        this.comp.company[val].NoOfShare += num;
                        console.log("success..enter 5 to save file")
                    }
                }
            }
        }
        else {
            console.log("company not found");
        }
        this.addStock()

    }

    printCompany() {
        for (let key in this.comp.company) {
            console.log(this.comp.company[key]);
        }
        this.addStock()
    }

    printCustomer() {
        var uname = read.question("enter the name of the customer ");
        for (let key in this.cust.customer) {
            if (this.cust.customer[key].userName == uname)
                console.log(this.cust.customer[key]);
        }
        this.addStock();

    }

    saveToFile() {
        fs.writeFileSync("companyShare.json", JSON.stringify(this.comp));
        fs.writeFileSync("customerShare.json", JSON.stringify(this.cust));
        this.addStock();
    }
    
}






var stk = new Stack;
stk.addStock();