/**
      * @description  : find factorial of number.
      * @param {*} num  :number to find factorial.
      */
     const factorial = function (num) {
        let fact = 1;;
        for (i = 1; i <= num; i++) {
            fact = fact * i;
        }
        return fact;
    }
    /**
          * @description  : calculate total  different binary trees can be fromed using n nodes.
          * @param {*} nodes  : total number of nodes
          */
    const binaryTree = function (nodes) {
        no_of_trees = Math.floor((this.factorial(2 * nodes)) / (this.factorial(nodes + 1) * this.factorial(nodes)));
        console.log(no_of_trees);
    }
    /**
          * @description  : Print calender of specified month and year.
          * @param {*} N  :number
          */
    const calender = function (month, year) {
        let u = require("../Algorithmic/utililty");
        let dis = require('util');
    
    
        let days = ["  sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        let monthdays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        let startday = u.DayOfWeek(month, 1, year);
        console.log(startday)
        // week days
        console.log(days[0] + "  " + days[1] + "  " + days[2] + "  " + days[3] + "  " + days[4] + "  " + days[5] + "  " + days[6]);
    
        var j;
    
        row = 0;
        var n = monthdays[month];
        dis.print(" ")
        // print number of spaces till starting date
        for (j = 0; j <= startday * 5; j++) {
            dis.print(" ");
        }
        for (let i = 1; i <= n; i++) {
            if (i < 10)
                // date is less than 10 print 
                dis.print(" " + i + "   ");
            else {
                // if date is greater than 9
                dis.print(" " + i + "  ");
            }
    
            if ((startday + i) % 7 == 0) {
                //for changing the line.
                console.log();
                dis.print("  ");
            }
        }
        console.log("\n\n");
    
    }
    
    const calendarUsingQue = function (month, year) {
        let u = require("../Algorithmic/utililty");
        let queue = require("./queue")
        let dis = require('util');
    
        let days = ["  sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        let monthdays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        let startday = u.DayOfWeek(month, 1, year);
        weekdaysque = new queue.queue();
        // add week days in queue
        for (let i = 0; i < days.length; i++) {
            weekdaysque.addToQueue(days[i]);
        }
        // print week days from queue
        while (!weekdaysque.isEmpty()) {
            dis.print(weekdaysque.removeFromQueue() + "  ");
        }
        console.log();
        dateque = new queue.queue();
        // add months in queue
        for (let j = 1; j <= monthdays[month]; j++) {
            dateque.addToQueue(j);
        }
        var j;
    
        row = 0;
        var n = monthdays[month];
        dis.print(" ")
        //  print spaces till start date
        for (j = 0; j <= startday * 5; j++) {
            dis.print(" ");
        }
        while (!dateque.isEmpty()) {
            let date = parseInt(dateque.removeFromQueue());
            if (date < 10)
                // if date is of one digit
                dis.print(" " + date + "   ");
            // if date is of two digit
            else {
                dis.print(" " + date + "  ");
            }
    
            if ((startday + date) % 7 == 0) {
                //for changing the line.
                console.log();
                dis.print("  ");
            }
        }
        console.log("\n\n");
    }
    
    const calendarUsingStack = function (month, year) {
        let utililtyalgo = require("../Algorithmic/utililty");
        let dis = require('util');
        let stack = require("./stack");
    
        let days = ["  sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        let monthdays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        let startday = utililtyalgo .DayOfWeek(month, 1, year);
        weekdaysque = new stack.stack();
        // add week days in stack
        for (let i = days.length - 1; i >= 0; i--) {
            weekdaysque.push(days[i]);
        }
        // print week days from stack
        while (!weekdaysque.isEmpty()) {
            dis.print(weekdaysque.pop() + "  ");
        }
        console.log();
        dateque = new stack.stack();
        // push dates in stack
        for (let j = monthdays[month]; j >= 1; j--) {
            dateque.push(j);
        }
        var j;
    
        row = 0;
        var n = monthdays[month];
        dis.print(" ")
        // print spaces till start day
        for (j = 0; j <= startday * 5; j++) {
            dis.print(" ");
        }
        while (!dateque.isEmpty()) {
            let date = parseInt(dateque.pop());
            if (date < 10)
                // if date is of one digit
                dis.print(" " + date + "   ");
            // if date is of two digit
            else {
                dis.print(" " + date + "  ");
            }
    
            if ((startday + date) % 7 == 0) {
                //for changing the line.
                console.log();
                dis.print("  ");
            }
        }
        console.log("\n\n");
    
    }
    
    const hashing = function (numberarray) {
        let linkList = require("./unlinkedList")
        let readline = require("readline-sync");
        var arr = [];
        for (let i = 0; i < numberarray.length; i++) {
            // calculate hash
            let hash = numberarray[i] % 11;
            // if position is not having linkedlist create and insert
            if (arr[hash] == undefined) {
                arr[hash] = new linkList.linkList();
                arr[hash].addElement(numberarray[i]);
            }
            // if element not present insert
            else {
                if (!arr[hash].searchElement(numberarray[i]))
                    arr[hash].addElement(numberarray[i]);
            }
        }
        // print array
        for (let j = 0; j < 11; j++) {
            console.log("element at " + j + " ");
            if (arr[j] != undefined) {
                arr[j].display();
            }
        }
        // take number want to  search
        let input = parseInt(readline.question("Enter Number you want to search "));
        if (isNaN(input)) {
            throw "Enter valid number"
        }
    
        if (arr[input % 11] != undefined) {
            // if search for element in list.
            if (arr[input % 11].searchElement(input)) {
                // if element found remove.
                arr[input % 11].removeElement(input)
                console.log("element removed")
    
            }
            //  if element not found add.
            else {
                arr[input % 11].addElement(input)
                console.log("element added")
            }
        }
        // if list is not not present in that position element not found add.
        else {
            arr[input % 11] = new linkList.linkList();
            arr[input % 11].addElement(input);
            console.log("Element added");
        }
        for (let j = 0; j < 11; j++) {
            console.log("element at " + j + " ");
            if (arr[j] != undefined) {
                arr[j].display();
            }
        }
    }
    
    module.exports = {
        factorial,
        binaryTree,
        calender,
        calendarUsingQue,
        calendarUsingStack,
        hashing
    }