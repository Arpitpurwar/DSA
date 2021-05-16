class Node{
    constructor(data,next = null) {
        this.data = data;
        this.next = next;
    }
}


class Stack{
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        
    }

    peek(){
        if(!this.top){
            return 'No element in stack'
        }
        return this.top.data;
    }

    push(data){
        let newNode = new Node(data);
        if(!this.bottom){
            this.bottom = newNode;
            this.top = newNode;
            
        }else{
            newNode.next = this.top;
            this.top = newNode; 
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0){
            return 'No Items to pop'
        }

        this.top = this.top.next;

        if(!this.top){
            this.bottom = this.top;
        }
        this.length--;
         
        return this;
    }

    isEmpty(){
        if(this.length === 0) return true;

        return false;
    }
}


let stack = new Stack();

(function(stack){
 stack.push(5);
 stack.push(10);
 stack.push(15);
 stack.pop();
 console.log(stack.peek())
 stack

})(stack);