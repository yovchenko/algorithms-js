var numbers = [1,2,3,4,5,6,7,8,9,10];
var numbersFiltered = numbers.filter( function evenNumber(number) {return number  % 2 === 0;});
console.log(numbersFiltered);
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
 const arr = [4, 5, 8, 12, 7];
 let num = arr.filter((el) => {
     if(isPrime(el)) return el;
 })
 console.log(num)