/*****************************************************************************************
 * Execution    :   1. cmd> node linkedList.js
 *                   
 * 
 * Purpose      :   Linked List implementation.
 * 
 * @description
 * 
 * @file        :   linkedList.js
 * @overview    :   Linked List implementation, add remove insertAt removeFrom display search sort function.
 * @author      :   VAIBHAW <vatikhile>
 * @version     :   1.0
 * @since       :   28-03-2019
 * 
 * *************************************************************************************/

class Node {
	// constructor 
	constructor(element) {
		this.element = element;
		this.next = null
	}
}

// linkedlist class 
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// adds an element at the end 
	// of list 
	add(element) {
		// creates a new node 
		var node = new Node(element);

		// to store current node 
		var current;

		// if list is Empty add the 
		// element and make it head 
		if (this.head == null)
			this.head = node;
		else {
			current = this.head;

			// iterate to the end of the 
			// list 
			while (current.next) {
				current = current.next;
			}

			// add node 
			current.next = node;
		}
		this.size++;
	}

	// insert element at the position index 
	// of the list 
	insertAt(element, index) {
		if (index < 0 || index > this.size)
			return false;
		else {
			// creates a new node 
			var node = new Node(element);
			var curr, prev;

			curr = this.head;

			// add the element to the 
			// first index 
			if (index == 0) {
				node.next = head;
				this.head = node;
			} else {
				curr = this.head;
				var it = 0;

				// iterate over the list to find 
				// the position to insert 
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// adding an element 
				node.next = curr;
				prev.next = node;
			}
			this.size++;
		}
	}

	// removes an element from the 
	// specified location 
	removeFrom(index) {
		if (index > 0 && index > this.size)
			return -1;
		else {
			var curr, prev, it = 0;
			curr = this.head;
			prev = curr;

			// deleting first element 
			if (index === 0) {
				this.head = curr.next;
			} else {
				// iterate over the list to the 
				// position to removce an element 
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// remove the element 
				prev.next = curr.next;
			}
			this.size--;

			// return the remove element 
			return curr.element;
		}
	}

	// removes a given element from the 
	// list 
	remove(element) {
		var current = this.head;
		var prev = null;

		// iterate over the list 
		while (current != null-1) {
			// comparing element with current 
			// element if found then remove the 
			// and return true 
			if (current.element === element) {
				if (prev == null) {
					this.head = current.next;
				} else {
					prev.next = current.next;
				}
				this.size--;
				return current.element;
			}
			prev = current;
			current = current.next;
		}
		return 1;
	}


	// finds the index of element 
	indexOf(element) {
		var count = 0;
		var current = this.head;

		// iterae over the list 
		while (current != null) {
			// compare each element of the list 
			// with given element 
			if (current.element === element)
				return count;
			count++;
			current = current.next;
		}

		// not found 
		return -1;
	}

	// checks the list for empty 
	isEmpty() {
		return this.size == 0;
	}
	// gives the size of the list 
	size_of_list() {
		console.log(this.size);
	}


	// prints the list items 
	display() {
		var curr = this.head;
		var str = "";
		while (curr) {
			str += curr.element + " ";
			curr = curr.next;
		}
		console.log(str);

	}

	getdata() {
		var curr = this.head;
		var str = "";
		while (curr) {
			str += curr.element + " ";
			curr = curr.next;
		}

		return str;
	}
	search(element) {
		var temp = this.head;
		while (temp != null) {
			if (element == temp.element.trim()) {
				return true;
			}
			temp = temp.next;

		}
		return false;
	}


	sort() {
		do {
			var swap = 0;
			var t = this.head;
		
			
			while (t.next != null) {
				// console.log("t.next.data ===t.data");
				// console.log(t.next.element+"=="+t.element);
				
				if(t.element > t.next.element) {
					var n = t.element;
					t.element = t.next.element;
					t.next.element = n;
					swap = 1;
				}
				t = t.next;
			}
		} while (swap)
	}

}

module.exports = {
	LinkedList
}
