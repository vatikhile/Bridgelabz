/**
      * @description  : Node function.
      * @param {*} element  : data in node
      */
     function Node(element) {

        this.value = element;
        this.next = null;
    
    }
    /**
        * @description  : Queue.
        */
    function queue() {
        this.front = null;
        this.rear = null;
    }
    
    
    /**
          * @description  : Add element to queue from rear .
          * @param {*} element  : data to be added.
          */
    queue.prototype.addToQueue = function (element) {
        // create new node
        let node = new Node(element);
        // first element in queue
        if (this.front == null) {
            this.front = node;
            this.rear = node;
            //console.log(element+" added");
        }
        else {
            //console.log(element+" added rear");
            // make node point to rear.
            node.next = this.rear;
            this.rear = node;
        }
    }
    /**
          * @description  :remove from queue.
          */
    queue.prototype.removeFromQueue = function () {
        // if queue is empty
        if (this.rear == null) {
            return false;
        }
        // if last element in queue  is to remove.
        if (this.rear == this.front) {
            let data = this.front.value;
            this.rear = null;
            this.front = null;
            //console.log(data);
            return data;
        }
        else {
            let data = this.front.value;
            let temp = this.rear;
            // iterate till second last.
            while (temp.next != this.front) {
                temp = temp.next;
            }
            // remove from front.
            this.front = temp;
            this.front.next = null;
            //console.log("removed");
            return data;
        }
    }
    /**
          * @description  : print queue.
          */
    queue.prototype.print = function () {
        let temp = this.rear;
        // iterate and print.
        while (temp != null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
    /**
          * @description  : check if queue is empty.
          * @param {*} N  :number
          */
    queue.prototype.isEmpty = function () {
        // if front is null queue is empty.
        if (this.front == null) {
            return true;
        }
        return false;
    }
    module.exports={
      queue
    }