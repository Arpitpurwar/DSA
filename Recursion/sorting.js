
const bubbleSort = (arr)=>{
    for(let i =0; i<arr.length;i++){
        for(j=0;j<arr.length ;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp 

            }
        }
    }
}

const selectionSort = (arr)=>{
    for(let i=0;i<arr.length;i++){
        let min = i;
        let temp = arr[i];
        for(let j=i+1;j<arr.length;j++){
            
            if(arr[j] < arr[min]){
               min = j 
            }
        }

        arr[i] = arr[min];
        arr[min] = temp;
        


    }
}


const insertSort = (arr)=>{
  for (let i =0; i<arr.length;i++){
      let currentIndex = i;
      for(j = i-1; j>=0; j--){
        if(arr[currentIndex] < arr[j]){
            let temp = arr[currentIndex];
            arr[currentIndex] = arr[j];
            arr[j] = temp; 
            currentIndex = j;
        }
      }
  }
}

(function(){
    let arr = [1,5,2,9,6,1,-3]
    insertSort(arr);
    arr
})()