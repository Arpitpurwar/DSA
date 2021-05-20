const countLetters = (str) =>{

    let arr = new Array(26).fill(0);

    for(let i = 0; i<str.length;i++){
        let charCodeValueOFa = 'a'.charCodeAt(0);
        let charCodeOfvalue = str[i].charCodeAt(0);
        let arrIndex = charCodeOfvalue - charCodeValueOFa;
        arr[arrIndex]++;
    }

    for(let i = 0; i< str.length;i++){
        let charCodeValueOFa = 'a'.charCodeAt(0);
        let charCodeOfvalue = str[i].charCodeAt(0);
        let arrIndex = charCodeOfvalue - charCodeValueOFa;

        if(arr[arrIndex] !== 0){
            console.log(str[i],arr[arrIndex]);
            arr[arrIndex] = 0;
        }
        
    }



}

console.log(countLetters('geeksforgeeks'));