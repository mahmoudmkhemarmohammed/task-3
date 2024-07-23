let arrayOfNumber = [ 2 , 4, 6 , 8, 30];
const addNumber = ( array ) => {
    return array.map( el => el).reduce( (acc , e ) => acc + e);
}
console.log(addNumber(arrayOfNumber))


// Second Solve 

const addNum = ( array ) => {
    let num = 0;
    for(let i = 0 ; i < array.length; i++) {
        num += array[i]
    }
    return num;
}
console.log(addNum(arrayOfNumber));