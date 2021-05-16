class DLLN{
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
        
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

    prepend(data){
        let node = new DLLN(data);
        let current = this.head;
        if(!current){
            this.head = node;
            this.tail = node;
            this.length++

            return this.printList();
        }
        else{
            current.prev = node;
            node.next = current;
            this.head = node;

            this.length++;
            return this.printList()
        }

    }

    append(data){
        let currentTail = this.tail;
        let newNode = new DLLN(data);

        currentTail.next = newNode;
        newNode.prev = currentTail;
        this.tail = newNode;

        this.length ++;
    return this.printList()

    }
    printList(){
        let currentNode = this.head;
        let arr = []
        while(currentNode!== null){
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return arr;
    }
}


let node = new DLL();



(function(n){
    n.prepend(4);
   console.log(n.prepend(2));
   console.log(n.append(6)) 
   n
})(node)