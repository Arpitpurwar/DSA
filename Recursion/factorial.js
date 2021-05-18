const factorialWithRecursion = (n) =>{
    if(n === 2){
        return 2;
    }
    return n * factorialWithRecursion(n-1);
    
}


const factorialWithIterative = (n) =>{
    let total = 1;

    for(let i=1;i<=n;i++){
        total =  total * i;
    }
    total
    return total;
}





(function(){
    console.log(factorialWithRecursion(5));
    factorialWithIterative(5);

})()