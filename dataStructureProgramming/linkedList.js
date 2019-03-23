/**
      * @description  : Node function.
      * @param {*} element  : data in node
      */
     function Node(element) {

        this.value = element;
        this.next = null;
    
    }
    /**
          * @description  :  Single linked list .
          */
    function linkList() {
        this.head = null;
    }
    
    /**
          * @description  : Adding element in linked list.
          * @param {*} value  : Data to be added in linked list.
          */
    linkList.prototype.addElement = function (value) {
        // creating new node
        var node = new Node(value)
        // if list is empty
        if (this.head === null) {
            this.head = node;
        }
        // if not empty append element in list.
        else {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
    
    
    }
    /**
          * @description  :Remove element from list.
          * @param {*} value  : data to be removed from list
          */
    linkList.prototype.removeElement = function (value) {
        // head is to be removed.
        if (this.head.value == value) {
            //console.log(this.head.value);
            this.head = this.head.next;
    
            return true;
        }
        // search element and remove it.
        else {
            current = this.head;
            prev = null;
            while (current != null) {
                if (value == current.value) {
                    prev.next = current.next;
                    return true;
                }
                prev = current;
                current = current.next;
            }
    
        }
        return false;
    }
    /**
          * @description  : print linked list.
          */
    linkList.prototype.print = function () {
        let temp = this.head;
        // iterate and print.
        while (temp != null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
    /**
          * @description  :Find the element in list.
          * @param {*} element  : element to find.
          */
    linkList.prototype.searchElement = function (element) {
        var current = this.head;
        var position = 0;
        // if element is head
        if (this.head.value == element) {
            return 1;
        }
        // iterate till end.
        while (current != null) {
            // if element found return position
            if (current.value == element) {
                return position;
            }
            // element not found goto next node
            current = current.next;
            position++;
        }
        return false;
    }
    /**
          * @description  :  Add list into file.
          * @param {*} path  : Path of file.
          */
    linkList.prototype.addTofile = function (path) {
        var readfile = require("fs");
        // make file empty
        readfile.writeFile(path, "", function (err) {
            if (err)
                console.log(err)
        });
        // append element in list to file.
        var temp = this.head;
        while (temp != null) {
            readfile.appendFile(path, temp.value + " ", function (err) {
                // If an error occurred, show it and return
                if (err) return console.error(err);
                // Successfully wrote to the file!
            });
            temp = temp.next;
        }
    
        // print file.
    
        readfile.readFile(path, (err, data) => {
            if (err) throw err;
    
            console.log("in the file\n" + data.toString());
        })
    }
    
    /**
          * @description  :  sort link list.
          */
    
    linkList.prototype.sortLinkedlist = function () {
        let temp = this.head;
        while (temp != null) {
            let temp2 = this.head;
            while (temp2.next != null) {
                if ((temp2.value) > (temp2.next.value)) {
                    let d = temp2.value;
                    temp2.value = temp2.next.value;
                    temp2.next.value = d;
                }
                temp2 = temp2.next;
            }
            temp = temp.next;
        }
    }
    
    /**
          * @description  : Print list in one line.
          */
    
    linkList.prototype.display = function () {
        let temp = this.head;
        let str = "";
        while (temp != null) {
            str += "  => " + temp.value;
            temp = temp.next;
        }
        console.log(str);
    }
    module.exports={
      linkList
    }