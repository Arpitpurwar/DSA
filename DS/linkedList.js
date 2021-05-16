class LLNode{
    constructor(data, address = null){
        this.data = data;
        this.address = address;

    }
}


class LinkedList{
    constructor(){
        this.head = null
        this.tail = this.head;
        this.length = 0
    }

    prepend(data){
        let newNode = new LLNode(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length ++;
            return this.printList();
        }

        let tempReference = this.head;
        newNode.address = tempReference;
        this.head = newNode;
        this.length++
        return this;
    }

    append(data){
        let currentTail = this.tail;
        let newNode = new LLNode(data);
        currentTail.address = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    insert(position,data){
        let newNode = new LLNode(data);
        let prev, current = this.head;

        if(position >= this.length){
                this.append(data);
                return this.printList()

        }

        if(position === 1){
            this.prepend(data);
            return this.printList()
        }


        while(position > 0){
            prev = current;
            current = current.address;
            position--
        }

        prev.address = newNode;
        newNode.address = current;
        return this.printList();
    }

    printList(){
        let current = this.head;
        let arr = []
        while(current !== null){
            arr.push(current.data);
            current = current.address;
        }
        return arr;
    }

}

let node = new LinkedList();


(function(n){
    
    n.prepend(4);
    n.prepend(5);
    n.prepend(1);
    n.append(6);
    n.insert(2,10);
    n.printList()
    

})(node)
