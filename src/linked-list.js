const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        this.nodes = [];
    }

    append(data) {

        let node = new Node(data);

        if (!this._head) {
        
            this._head = node;
            this._tail = node;
      
          } else {
            
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;  
          }

          this.nodes.push(node);
          this.length ++;
          return this;
        
    }

    head() {

        return this._head.data;
 
        
    }

    tail() {
       return this._tail.data;

    }

    at(index) {
        return this.nodes[index].data;
    }

    insertAt(index, data) {
        let node = new Node(data);

        console.log(this.nodes);

        if (index == 0) {

            if (this.length == 0) {
                this.append(data);

            }

            this.nodes.splice(index, 0, node);
            node.next = this.nodes[index+1];
            node.prev = null;

        } else if (index == this.nodes.length-1) {
            this.nodes.splice(index, 0, node);
            node.prev = this.nodes[index-1];
            node.next = null;

        } else {


            this.nodes.splice(index, 0, node);
            node.next = this.nodes[index+1];
            this.nodes[index+1].prev = node;
            node.prev = this.nodes[index-1];
            this.nodes[index-1].next = node;
            this.length++;
        }

        console.log(this.nodes);
        return this;
    }

    isEmpty() {
        if (this.length == 0) return true;
        return false;
    }

    clear() {
        console.log(this.nodes);
        
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
        this.nodes.length = 0;
        console.log(this.nodes);
        return this;
 
    }

    deleteAt(index) {
        this.nodes.splice(index, 1);
        this.length--;
        return this;
    }

    reverse() {
        console.log(this.nodes);
    
        this._head = this.nodes[this.nodes.length - 1]
        this._tail = this.nodes[0];


        for (let node of this.nodes) {
            node.next = node.prev;
            node.prev = node.next;

        }

        this.nodes.reverse();

        console.log(this.nodes);
        
        return this;
    }

    indexOf(data) {
        return this.nodes.findIndex(item => (item.data == data));
    }
}

module.exports = LinkedList;
