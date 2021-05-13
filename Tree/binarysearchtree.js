/**
 *  Each node can have only 0 or 1 or 2 child.
 *  Each chlid can have only one parent.
 * 
 */

class TreeNode{
    constructor(value, left = null, right = null ){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


class BSTTree{
    constructor(){
        this.root = null
    }

    insert(value){
        let currentNode = this.root;
       
        if(!currentNode){
            this.root = new TreeNode(value);;
            return;
        }else{
            function traverseNode(node){
                if(node.value > value){
                    if(!node.left){
                        node.left = new TreeNode(value);
                        return node;
                    }else{
                        node.left = traverseNode(node.left);
                        return node;
                    }
                }else if(node.value < value){
                    if(!node.right){
                        node.right = new TreeNode(value);
                        return node;
                    }else{
                        node.right = traverseNode(node.right);
                        return node;
                    }
                }else{
                    return null;
                }

            }
            traverseNode(currentNode);
        }
       
    }

   traverseDST(){
      let preOrderValues = [],postOrderValues = [],inOrderValues = [];
      
        const preOrderStyle = (node) => {
            if(!node) return;
            preOrderValues.push(node.value);
            if(node.left) preOrderStyle(node.left);
            if(node.right) preOrderStyle(node.right);
            
            return preOrderValues
        }
        const postOrderStyle = (node) =>{
            if(!node) return;
            
            if(node.left) postOrderStyle(node.left);
            if(node.right) postOrderStyle(node.right);
            postOrderValues.push(node.value);
            
            return postOrderValues
        } 
        const inOrderStyle = (node) => {
            if(!node) return;
          
            if(node.left) inOrderStyle(node.left);
            inOrderValues.push(node.value);
            if(node.right) inOrderStyle(node.right);
            
            return inOrderValues
        }


       return {
           preOrder : preOrderStyle(this.root),
           postOrder : postOrderStyle(this.root),
           inOrder : inOrderStyle(this.root)
       }
   }

   find(value){
    let currentNode = this.root;
    if(!currentNode) return null;

    function findNode(node){
        if(!node){
            return 'Not Exist';
        }
        if(node.value === value){
            return node;
        }else if(node.value < value){
            return findNode(node.right);
        }else if(node.value > value){
            return findNode(node.left);
        }
    }

    return findNode(currentNode);

   }

}

let tree = new BSTTree();

(function(tree){
    tree.insert(100);
    tree.insert(96);
    tree.insert(93);
    tree.insert(91);
    tree.insert(105);
    tree.insert(101);
    tree.insert(107);
    tree.insert(97);
    tree.insert(94);
   // console.log(JSON.stringify(tree));
    const { preOrder, inOrder, postOrder} =tree.traverseDST();
    preOrder
    inOrder
    postOrder
    console.log(tree.find(10));
})(tree)