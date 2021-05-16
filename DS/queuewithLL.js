class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class QueueLL{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }

    enqueue(value){
        let newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
        }
        else{
            this.last.next = newNode;
        }
        
        this.last = newNode;
        this.length++;

    }

    dequeue(){

        if(this.length === 0){
            return 'No elements for deque operation';
        }
        else{
            if(this.first === this.last){
                this.last = null;
            }
            this.first = this.first.next;
this.length--

return this

        }

    }


}


let node = new QueueLL();



(function(node){
    node.enqueue(5);
    node.enqueue(6);
    node.enqueue('google');
    node.enqueue('rtt');
    node.enqueue(1);
    node.enqueue('Tere');
    console.log(node.peek());
    node.dequeue()
    node.dequeue()
    node.dequeue()
    node.dequeue()
    node.dequeue()
    node.dequeue()
    
})(node)