// 
let arr1 = [0,1,3,4,6,9,11,56];

let arr2 = [-10,-5,-6,-4,0,1,57];


(function(sortedArr1,sortedArr2){
    let length1 = sortedArr1.length;

    let length2 = sortedArr2.length;

    if(length1 === 0 && length2 ===0){
        return 'Something is wrong'
    }

    if(sortedArr1.length === 0){
        return sortedArr2;
    }

    if(sortedArr2.length === 0){
        return sortedArr1;
    }

    let i=1,j=1, mergedSA = [];

    let arr1Item = sortedArr1[0];
    let arr2Item = sortedArr2[0];

    while(arr1Item || arr2Item !== undefined){
           if(arr2Item === undefined || (arr1Item < arr2Item)){
            mergedSA.push(arr1Item);
            arr1Item = sortedArr1[i];
            i++;
           }else{
            mergedSA.push(arr2Item);
            arr2Item = sortedArr2[j];
            j++;
           }
    }

return mergedSA;
})(arr1,arr2)