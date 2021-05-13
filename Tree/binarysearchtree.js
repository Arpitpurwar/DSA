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
})(tree)