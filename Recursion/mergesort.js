const mergeSort = (arr) =>{

    if(arr.length === 1){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    left
    let right = arr.slice(middle);
    right
    return merge(mergeSort(left),mergeSort(right));
    
    


}

function merge(left,right){
    let newArry = [];
    left 
    right
    let leftIndex = 0, rightIndex = 0;
    
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            newArry.push(left[leftIndex]);
            leftIndex++
        }else{
            newArry.push(right[rightIndex]);
            rightIndex++
        }
    }
    newArry
  return newArry.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}



(function(){
    console.log(mergeSort([6,7,-1,0]))
})()