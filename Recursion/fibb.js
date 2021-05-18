
const fabWithRecursion = (n) =>{
   if(n < 2){
       return n
   }
    console.log(n);
   return fabWithRecursion(n-1)+fabWithRecursion(n-2);

    
}


const fabWithIterative = (n) =>{
   let arr = [0,1];

for(let i =2; i <= n; i++){
    arr.push(arr[i-2]+arr[i-1]);
}
   return arr[n];
}





(function(){
    console.log(fabWithRecursion(6));
    console.log(fabWithIterative(8));

})()