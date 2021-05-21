
const zigZag = (str,n) =>{

    let arr = new Array(n).fill('');
    let left = true;
    let row = 0;

    for(let char of str){
        
        arr[row] += char;
        
        if(row === 0){
            left = true;
        }
        if(row === n-1){
            left = false;
        }

        left ? row++ : row--;
    
    }

    let returnedString = '';
for(let value of arr){
    returnedString += value;
}


return returnedString


}


console.log(zigZag('GEEKSFORGEEKS',3));
