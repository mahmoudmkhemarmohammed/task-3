let arrayOfNumber = [1, 1, 2, 3, 4, 4, 5, 6];
const removeDuplicateNumber = ( array ) => {
    return array = [...new Set(array)];
}
console.log(removeDuplicateNumber(arrayOfNumber));



// Second Solve
const removeDuplicateNum = ( array ) => {
    let newArray = [];
    array.forEach( el => {
        if(newArray.indexOf( el ) === -1){
            newArray.push(el)
        }
    })
    return newArray
}
console.log(removeDuplicateNum(arrayOfNumber));