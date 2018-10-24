// code below for linked list algo 

//importing the comparator lib to assist 

// import Comparator from '../utils/comparator/Comparator'; 

// class LinkedList {
// /**
// *	@params {Function} [comparatorFunction]
// */
// constructor(comparatorFunction) {
// 	/** @let LinkedListNode */
// 	this.head = null; 

// 	/** @let LinkedListNode */ 
// 	this.tail = null; 

// 	this.compare = new Comparator(comparatorFunction); 

// 	}
	
// }


function singleLinkedList () {
	this.length = 0; //default value
	this.head = null; //default value of the head of the linked list 
}

//we need to store it into a new node 

function storeNode () {
	this.data = data; 
	this.next = null; 
}; 

//add a node
singleLinkedList.prototype.add = function(value) {
	let node = new storeNode(value); 
	let currentNode = this.head; 

	//if the current node is null, then its has to be a new list 
	if(!currentNode) {
		this.head = node; //we are not setting this new node as the current node

		this.length++; //increment length of list 

		return node; 
	}
	//if next presents, then we need to set the current node to the next node 
	while(currentNode.next) {
		currentNode = currentNode.next; 
	}
	currentNode.next = node; //we now set the next code as the newly created node 

	this .length++; 
	return node; 

}; 

let list = new.singleLinkedList(); 
list.add(1); //adds head
list.add(2); //first node has a ref to this node, this node ref = null 

singleLinkedList.prototype.remove = function(position) {
	let currentNode = this.head;
	let deletedNode = null;
	let nextToDelete = null; 
	let beforeToDelete = null;
	let count = 0; 

	//if position is not present

	if(position < 0 || position > list.length) {
		throw new Error("invalid position"); 
	}
}

// var list = new singlyLinkedList();
// list.add(1); //Head
// list.add(2); //1st node has ref of this node, this node ref = null

// singlyLinkedList.prototype.remove = function(position) {
//   var currentNode = this.head;
//   var deletedNode  = null;
//   var nextToDelete  = null;
//   var beforeToDelete  = null;
//   var count = 0;

//   //If position not present
//   if (position < 0 || position > list.length) {
//     throw new Error("Invalid position");
//   }

//   //If position is head's position
//   if (position === 1) {
//     this.head = currentNode.next; //Set next node to head
//     deletedNode = currentNode; //To return deleted node
//     this.length--; //Decrement the length

//     return deletedNode;
//   }

//   //If any other position
//   while (count < position) {
//     beforeToDelete = currentNode;
//     nextToDelete = currentNode.next;
//     count++;
//   }

//   beforeToDelete.next = nextToDelete.next; //Before removing node
//   deletedNode = nextToDelete;
//   nextToDelete = null;
//   this.length--; //Decrement length after deleting
//   return deletedNode;
// };

// singlyLinkedList.prototype.search = function(position) {
//   var currentNode = this.head;
//   var count = 1;

//   //If list is empty or position invalid or position not present
//   if (this.length < 0 || position > this.length || position < 0) {
//     throw new Error("Invalid position");
//   }

//   //If position present, return its node
//   while (count < position) {
//     currentNode = currentNode.next; //Set currentNode to next node
//     count++;
//   }

//   return currentNode;
// };



