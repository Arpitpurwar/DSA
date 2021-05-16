class Stack{
    constructor() {
        this.arr = [];
        
    }

    peek(){
        return this.arr[this.arr.length-1];
    }

    push(data){
        this.arr.push(data);
    }

    pop(){
        this.arr.pop();
    }

    isEmpty(){
        if(this.arr.length === 0) return true;

        return false;
    }
}


let stack = new Stack();

(function(stack){
 stack.push('google');
 stack.push('gmail');
 stack.push('yutueb');
 stack.pop();
 stack

})(stack);