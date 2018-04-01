/*function max(array) {
     array[0] = 'A';
     array[1] = 'B';
     let value = array.length;
     
 if (Number.isInteger(value) === true) {
  return value;
} else   {
  return NaN;
}
}

var  example = [];
var start = max(example);
console.log(max(example));*/

function primeNum(n) {
var i = 2,
  j = false;
  f = Math.trunc(Math.sqrt(n));
for (; i <= f + 1; i++) {
  if (j === false) {
    if (n % i === 0) j = true;
    else if (j === false && i === f + 1) return (console.log(n + ' is prime'));
  }
  else {
      return (console.log((i - 1) + ' ' + n + ' is not prime'));
    }
  }
}

primeNum(7733)