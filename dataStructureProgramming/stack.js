
/**
      * @description  : Node function.
      * @param {*} element  : data in node
      */
     function Node(element) {

        this.value = element;
        this.next = null;
    }
    
    /**
          * @description  : Stack function.
          */
    function stack() {
        this.head = null;
        this.top = null;
    }
    /**
          * @description  : push element in stack.
          * @param {*} element : data to push in stack
          */
    stack.prototype.push = function (element) {
        // create new node.
        var node = new Node(element);
        // if stack is initially empty
        if (this.head === null) {
            // make top and head point to first node.
            this.top = node;
            this.head = node;
            //console.log(element+"element added");
            return;
        }
        // add element on top.
        this.top.next = node;
        this.top = node;
    }
    /**
          * @description  : pop element from stack.
          */
    stack.prototype.pop = function () {
        // if stack is empty.
        if (this.top == null) {
            // console.log("stack is empty");
            return false;
        }
        // if stack is having only one element.
        else if (this.top == this.head) {
            let data = this.top.value;
            this.top = null;
            this.head = null;
            // console.log("stack is now empty");
            return data;
        }
        // iterate till second last.
        let temp = this.head;
        while (temp.next !== this.top) {
            temp = temp.next;
        }
        let data = this.top.value;
        // make top point to second last.
        this.top = temp;
        // unlink last element.
        this.top.next = null;
        return data;
        // console.log("element poped")
    }
    /**
          * @description  : print stack.
          */
    stack.prototype.print = function () {
        let temp = this.head;
        // iterate and print.
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
    /**
          * @description  : check if stack empty.
          */
    stack.prototype.isEmpty = function () {
        // if top is null stack is empty.
        if (this.top == null)
            return true;
        return false;
    }
    module.exports={
        stack
    }