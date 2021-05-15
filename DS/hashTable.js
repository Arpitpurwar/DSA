class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    // Denote private function in JS
    _hash(key){
        let hash = 0;
        for(let i=0; i<key.length;i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(){
        let key = arguments[0];
        let value = arguments[1];
        let index = this._hash(key);
        if(!this.data[index]){
            this.data[index] = [];
        }
        this.data[index].push([key,value]);
        return this.data;
     }

    get(key){
        let address = this._hash(key);
         let currentBucket = this.data[address];
            if(currentBucket){
                for(let i=0; i<currentBucket.length; i++){
                    if(currentBucket[i][0] === key){
                        return currentBucket[i][1];
                    }
                }
            }
            return undefined;
    }

    keys(){
        let hashArray = this.data;
        let returnedKeys =[];

        for(let i = 0; i<hashArray.length; i++){
            if(hashArray[i]){
                for(let j=0; j<hashArray[i].length;j++){
                    returnedKeys.push(hashArray[i][j][0]);
                }
            }
        }
            return returnedKeys;

    }
}



// let myObj = new HashTable(2);
// myObj.set('grapes',10000);
// myObj.set('Apple',50);
// console.log(myObj.set('gunpes',30)); 
// console.log(myObj.get('grapes'));
// myObj.keys();


// Find first recurring letters in String

let ex1 = [2,5,1,2,3,5,1,2,4],
    ex2 = [2,1,1,2,3,5,1,2,4]
    ex3 = [2,3,4,5];

function findFirstRecurringNumber(arr){
    let mySet = new Set();

    for(let i=0;i<arr.length; i++){
        if(mySet.has(arr[i])){
            return arr[i];
        }
        mySet.add(arr[i]);
    }

    return undefined


} 

console.log(findFirstRecurringNumber(ex3));





 

