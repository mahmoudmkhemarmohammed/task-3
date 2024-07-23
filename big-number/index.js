let arrayOfNumber = [ 20 , 40 , 5 , 10, 50 , 100];
const bigNumber = ( array ) => {
    return Math.max(...array);
}
console.log(bigNumber(arrayOfNumber));