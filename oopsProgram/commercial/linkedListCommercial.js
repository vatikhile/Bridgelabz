/******************************************************************************
 *  Execution       :   1. default node          : cmd> node linkedListCommercial.js
 *                      
 *
 *  purpose         : To maintain the List of CompanyShares in a Linked List So new CompanyShares can
                      be added or removed easily
 *
 *  @description    : to add and remove company shares.
 *
 *  @file           : linkedListCommercial.js   
 *  @author         : VAIBHAW <vatikhile>
 *  @version        : 1.0
 *  @since          : 28-03-2019
 *
 ******************************************************************************/


var fs = require('fs');
var read = require("readline-sync");
var list = require("./linkedList");


class Stock {
    constructor() {
        var company = fs.readFileSync('companyShare.json', 'utf8');
        this.comp = JSON.parse(company);
        this.ll = new list.LinkedList;
    }
}

class StockLinkedList extends Stock {

    stockAdd() {
        var ch = read.questionInt("Choose from the given options \n" +
            " 1.Add company \n 2.Remove company \n 3.Print \n 4.save to file \n");

        switch (ch) {
            case 1: this.addCompany();
                break;

            case 2: this.removeCompany();
                break;

            case 3: this.print();
                break;

            case 4: this.saveToFile();
                break;

            default: console.log("enter a valid input ");

        }
    }

    addList() {
        for (let key in this.comp.company) {
            this.ll.add(this.comp.company[key]);
        }
        this.stockAdd();
    }

    addCompany() {
        var name = read.question("enter the name of the company ");
        var noOfShare = read.question("enter the number of share ");
        var price = read.question("enter the price ");
        let newCompany = {
            "NameOfCompany": name,
            "NoOfShare": noOfShare,
            "Price": price
        }
        this.ll.add(newCompany);
        console.log();
        this.saveToFile();
        this.print();
        //  console.log("For save to File enter 4");

        this.stockAdd();
    }

    removeCompany() {
        let curr = this.ll.head;
        // var curr;
        var name = read.question("enter the name of company to remove ");
        while (curr.element.NameOfCompany != name && curr != null) {
            curr = curr.next;
        }
        if (curr != null) {
            this.ll.remove(curr.element);
            console.log("successfully removed ");
        }
        else {
            console.log("comapany not found ");
        }this.saveToFile();
        this.stockAdd();

    }
    print() {
        var curr = this.ll.head;
        while (curr !== null) {
            console.log("name of the company is : " + curr.element.NameOfCompany);
            console.log("number of shares : " + curr.element.NoOfShare);
            console.log("price is: " + curr.element.Price);
            curr = curr.next;
        }
        this.stockAdd();
    }
    saveToFile() {
        let arr = [];
        let curr = this.ll.head;
        while (curr != null) {
            arr.push(curr.element);
            curr = curr.next;
        }
        // arr.unshift("{ company:")
        // arr.push("}")
        fs.writeFileSync("companyShare.json", JSON.stringify(arr));
        
    }
}

var stk = new StockLinkedList();
stk.addList();