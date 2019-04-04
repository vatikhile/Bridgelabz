/*****************************************************************************************
 * Execution    :   1. cmd> node queueLinkedList.js
 *                   
 * 
 * Purpose      :   Queue using Linked list implementation.
 * 
 * @description
 * 
 * @file        :   queueLinkedList.js
 * @overview    :   Queue using linked list implementation.
 * @author      :   VAIBHAW <vatikhile>
 * @version     :   1.0
 * @since       :   28-03-2019
 * 
 * *************************************************************************************/


class Node {
        constructor(element) {
            this.next = null;
            this.element = element;
        }
}

class QueueLinkedList {
    constructor() {
        this.head = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(element) {
        var n = new Node(element)
        if (this.head === null) {
            this.head = n;
            this.size++;
            return;

        }
        else {
            var curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = n;
            this.size++;
        }
    }

    dequeue() {
        if (this.head === null) {
            console.log("empty");
            return null;

        }
        var n = this.head.element;
        this.head = this.head.next;
        if (this.head == null) {
            this.rear = null;
        }
        this.size--;
        return n;
    }

    display() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element;
            if (curr.next != null) {

                str += " ";

            }
            curr = curr.next;
        }
        return str;
    }

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }
}

module.exports =
    {
        QueueLinkedList
    }