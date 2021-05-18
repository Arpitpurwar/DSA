
let index = 0;
const fabWithRecursion = (n) =>{
    index++
   if(n < 2){
       return n
   }
  
   return fabWithRecursion(n-1) + fabWithRecursion(n-2);
    
}


const fabWithIterative = (n) =>{
   let arr = [0,1];

for(let i =2; i <= n; i++){
    arr.push(arr[i-2]+arr[i-1]);
}
   return arr[n];
}
let fastIndex = 0;
const fabWithMemoRecursion = () => {
    let cache = {};
    return function fib(n){
        fastIndex++;
        if(n in cache){
            return cache[n];
        }
        else{
            if(n< 2){
                return n;
            }else{
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }

        }

    }

}




(function(){
    console.log(fabWithRecursion(10));
    let memo = fabWithMemoRecursion()
    console.log(memo(10));
    console.log(fabWithIterative(8));


})()